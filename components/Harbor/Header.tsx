import ReactDOM from 'react-dom'
import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import NavigationItem from 'models/NavigationItem'
import styled from 'styled-components'
import { tablet, mobile, useMedia, MediaType, Media } from 'components/Media'
import { HamMenu } from 'components/Harbor/Shared/Svg'
import Modal from 'components/Modal'

const navigationItemsTitle: string[] = ['Home', 'About', 'Know Your Risks', 'For Work', 'Journal', 'Shop']

interface NavigationListInternalProp {
    onSelectedChanged(index: number): void,
    initSelectedIndex?: number
}

const NavigationListInternal = ({ onSelectedChanged, initSelectedIndex = 0 }: NavigationListInternalProp) => {
    const [navigationItems, setNavigationItems] = useState(Array<NavigationItem>())

    const baseNavigationItems = useMemo((): NavigationItem[] => {
        const res: NavigationItem[] = []
        for (let i = 0; i < navigationItemsTitle.length; i++) {
            res.push({
                id: i,
                title: navigationItemsTitle[i],
                isSelected: false
            })
        }
        return res
    }, [])

    const onNavigationClickedHandler = useCallback((selectedItem: NavigationItem) => {
        const newNavigationItems = [...baseNavigationItems]

        const oldSelectedItem = newNavigationItems.find(cur => cur.isSelected)
        if (oldSelectedItem)
            oldSelectedItem.isSelected = false

        const newSelectedItem = newNavigationItems.find(cur => cur.id === selectedItem.id)
        if (newSelectedItem)
            newSelectedItem.isSelected = true

        setNavigationItems(newNavigationItems)
        onSelectedChanged(newNavigationItems.indexOf(newSelectedItem!))
    }, [baseNavigationItems, onSelectedChanged])

    useEffect(() => {
        if (navigationItems.length === 0) {
            baseNavigationItems.forEach(item => {
                item.onClick = onNavigationClickedHandler
            })
            const newNavigationItems = [...baseNavigationItems]
            newNavigationItems[initSelectedIndex].isSelected = true
            setNavigationItems(newNavigationItems)
        }
    }, [baseNavigationItems, navigationItems, initSelectedIndex, onNavigationClickedHandler])


    return (
        <Wrapper>
            <LogoWrapper>
                <Image src='/harbor/logo.png' width={153} height={35} alt='harbor logo' />
            </LogoWrapper>
            <nav>
                <Navigation>
                    {navigationItems.map(item =>
                        <SNavigationItem key={item.id}
                            isSelected={item.isSelected}
                            onClick={() => item.onClick!(item)}>
                            {item.title}
                        </SNavigationItem>
                    )}
                </Navigation>
            </nav>
        </Wrapper>
    )
}

export default function Header() {

    const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const media = useMedia()

    const onCloseModal = useCallback(() => {
        setIsMobileNavigationOpen(false)
    }, [])

    const onSelectedChangedHandler = useCallback((index: number) => {
        setSelectedIndex(index)
        if (media === MediaType.Mobile)
            onCloseModal()
    }, [media, onCloseModal])

    return (
        <>
            <Media greaterThanOrEqual="md">
                <NavigationListInternal onSelectedChanged={onSelectedChangedHandler} initSelectedIndex={selectedIndex} />
            </Media>
            <Media lessThan="md">
                <ModileWrapper>
                    <Image src='/harbor/logo.png' width={153} height={35} alt='harbor logo' />
                    <HamMenuWrapper onClick={() => setIsMobileNavigationOpen(true)}>
                        <HamMenu />
                    </HamMenuWrapper>
                </ModileWrapper>
                <Modal isOpen={isMobileNavigationOpen}
                    isFullOpen={true}
                    stickToBottom={false}
                    onClose={onCloseModal}>
                    <NavigationListInternal onSelectedChanged={onSelectedChangedHandler} initSelectedIndex={selectedIndex} />
                </Modal>
            </Media>
        </>
    )
}


const Wrapper = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    height:100px;
    gap: 100px;

    @media only screen and (max-width: ${tablet}px) {
        justify-content: center;
        padding-left: 1rem;
        padding-right: 1rem;
        gap: 0;
    }

    @media only screen and (max-width: ${mobile}px) {
        height:100%;
    }
`

const ModileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 15px 0 30px;
`

const Navigation = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 16px;
    gap: 30px;

    @media only screen and (max-width: ${tablet}px) {
        flex-shrink: 1;
        gap: 5px;
    }

    @media only screen and (max-width: ${mobile}px) {
        flex-direction: column;
        margin-top: 1rem;
    }
`

interface SNavigationItemProp {
    isSelected: boolean
}

const SNavigationItem = styled.li<SNavigationItemProp>`
    padding: 0.5rem 1.25rem;
    cursor: pointer;
    user-select: none;
    color: ${props => props.theme.mainColor};
    border-radius: 40px;
    background: ${props => props.isSelected ? "#d7d7d7" : "transparent"};
    transition: all 0.3s ease-out;

    :hover {
        background: #d7d7d7;
    }
`

const LogoWrapper = styled.div`
    @media only screen and (max-width: ${tablet}px) {
        display:none;
    }
`

const HamMenuWrapper = styled.button`
    padding: 1rem;
`