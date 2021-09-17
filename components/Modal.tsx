import React, { useState, useEffect, useRef, ReactNode } from 'react'
import ReactDom from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const CloseIcon = () =>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#EFF1F3" />
        <path d="M19.9993 20L12 12.0008" stroke="#818FA4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12L12.0007 19.9992" stroke="#818FA4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

interface ModalProp {
    isOpen: boolean,
    onClose?(): void,
    children: ReactNode,
    padding?: string,
    title?: string,
    background?: string,
    hideCloseButton?: boolean,
    isFullOpen?: boolean,
    stickToBottom?: boolean
}

const overlayTransitionName = 'overlay-transition'
const modalBottomTransitionName = 'modal-bottom-transition'
const modalTopTransitionName = 'modal-top-transition'

enum InternalState {
    Init, Open, Close, Dispose
}

function Modal({ isOpen, onClose, children, padding = '1rem 1rem 1.5rem', title = '', background = 'white',
    hideCloseButton = false, isFullOpen = false, stickToBottom = true }: ModalProp, ref: any) {

    const [internalState, setInternalState] = useState(InternalState.Dispose) // can't use CSSTransition before it renders or after wrapper is removed
    const overlayRef = useRef(null)
    const modalRef = useRef(null)

    useEffect(() => {
        if (internalState === InternalState.Dispose && isOpen)
            setInternalState(InternalState.Init)

        else if (internalState === InternalState.Init)
            setInternalState(InternalState.Open)

        else if (internalState === InternalState.Open && !isOpen)
            setInternalState(InternalState.Close)

    }, [internalState, isOpen])

    useEffect(() => {
        if (modalRef?.current && ref) {
            ref.current = modalRef.current
        }
    }, [modalRef, ref])

    if (typeof document !== 'object') // ssr
        return null

    const preventEventHandler = (event: any) => {
        event.stopPropagation()
    }

    const onCloseTransitionExited = () => {
        setInternalState(InternalState.Dispose)
    }

    return ReactDom.createPortal(
        <>
            {(internalState !== InternalState.Dispose) &&
                <div onTouchMove={preventEventHandler}
                    onMouseMove={preventEventHandler}>
                    <CSSTransition
                        in={internalState === InternalState.Open}
                        timeout={500}
                        unmountOnExit
                        onExited={onCloseTransitionExited}
                        nodeRef={overlayRef}
                        classNames={overlayTransitionName}>
                        <Overlay ref={overlayRef} zIndex={999 + document.getElementById('portal')!.children.length} />
                    </CSSTransition>
                    <CSSTransition
                        in={internalState === InternalState.Open}
                        timeout={500}
                        unmountOnExit
                        nodeRef={modalRef}
                        classNames={stickToBottom ? modalBottomTransitionName : modalTopTransitionName}>
                        <ModalRoot
                            ref={modalRef}
                            isFullOpen={isFullOpen}
                            background={background}
                            padding={padding}
                            stickToBottom={stickToBottom}
                            zIndex={999 + document.getElementById('portal')!.children.length}>
                            <TitleWrapper>
                                <Title>{title}</Title>
                            </TitleWrapper>
                            {!hideCloseButton &&
                                <CloseButton
                                    disabled={false}
                                    type="button"
                                    onClick={onClose}>
                                    <CloseIcon />
                                </CloseButton>
                            }
                            {children}
                        </ModalRoot>
                    </CSSTransition>
                </div>
            }
        </>
        ,
        document.getElementById('portal')!
    )
}

export default React.forwardRef(Modal)

interface OverlayProp {
    zIndex: number
}

const Overlay = styled.div<OverlayProp>`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000099;
    z-index: ${props => props.zIndex};
    transition: all 0.5s ease;

    &.${overlayTransitionName}-enter {
        opacity: 0;
    }

    &.${overlayTransitionName}-enter-active {
        opacity: 1;
    };

    &.${overlayTransitionName}-enter-done {
        opacity: 1;
    };

    &.${overlayTransitionName}-exit {
        opacity: 1;
    };

    &.${overlayTransitionName}-exit-active {
        opacity: 0;
    };

`

interface ModalRootProp {
    isFullOpen: boolean,
    background: string,
    padding: string,
    stickToBottom: boolean
    zIndex: number
}

const ModalRoot = styled.div<ModalRootProp>`
    position: fixed;
    bottom: ${props => props.stickToBottom ? "0" : "unset"};
    top: ${props => !props.stickToBottom ? "0" : "unset"};
    overflow-y: auto;
    border-style: none;
    border: 2px solid transparent;
    background: ${props => props.background};
    z-index: ${props => props.zIndex};
    padding: ${props => props.padding};
    border-top-left-radius: ${props => !props.isFullOpen && props.stickToBottom ? "0.75rem;" : "0"};
    border-top-right-radius: ${props => !props.isFullOpen && props.stickToBottom ? "0.75rem;" : "0"};
    border-bottom-left-radius: ${props => !props.isFullOpen && !props.stickToBottom ? "0.75rem;" : "0"};
    border-bottom-right-radius: ${props => !props.isFullOpen && !props.stickToBottom ? "0.75rem;" : "0"};
    max-height: ${props => props.isFullOpen ? "100%" : "90%"};
    height: ${props => props.isFullOpen ? "100%" : "auto"};
    width: 100%;
    transition: all 0.3s ease;

    &.${modalBottomTransitionName}-enter {
        transform: translateY(100%);
    }

    &.${modalBottomTransitionName}-enter-active {
        transform: translateY(0);
    };

    &.${modalBottomTransitionName}-enter-done {
        transform: translateY(0);
    };

    &.${modalBottomTransitionName}-exit {
        transform: translateY(0);
    };

    &.${modalBottomTransitionName}-exit-active {
        transform: translateY(100%);
    };

    &.${modalTopTransitionName}-enter {
        transform: translateY(-100%);
    }

    &.${modalTopTransitionName}-enter-active {
        transform: translateY(0);
    };

    &.${modalTopTransitionName}-enter-done {
        transform: translateY(0);
    };

    &.${modalTopTransitionName}-exit {
        transform: translateY(0);
    };

    &.${modalTopTransitionName}-exit-active {
        transform: translateY(-100%);
    };
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #000000;
    text-align: left;
    margin-bottom: 1.5rem;

    :empty {
        margin-bottom: 0;
    }
`

const CloseButton = styled.button`
    position: absolute;
    right: 20px;
`