import ClassNameProp from "models/ClassNameProp"
import styled from 'styled-components'

const ThemePath = styled.path`
    fill: ${props => props.theme.mainColor};
`

export const HamMenu = ({className}: ClassNameProp) => 
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" height="32px" id="Layer_1" enableBackground="new 0 0 32 32"  version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve">
        <ThemePath xmlns="http://www.w3.org/2000/svg" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
    </svg>

export const AppStoreLogo = ({className}: ClassNameProp) =>
    <svg className={className} style={{ position: 'relative', bottom: '1px', left: '2px' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="21px" height="24px" viewBox="0 0 21 24" version="1.1">
        <g id="surface1">
            <path stroke='none' fillRule='nonzero' fill='rgb(100%,100%,100%)' fillOpacity={1} d="M 16.675781 22.078125 C 15.386719 23.289062 13.964844 23.101562 12.613281 22.53125 C 11.171875 21.949219 9.859375 21.910156 8.335938 22.53125 C 6.445312 23.320312 5.4375 23.09375 4.300781 22.078125 C -2.136719 15.664062 -1.1875 5.886719 6.128906 5.519531 C 7.902344 5.613281 9.144531 6.46875 10.191406 6.542969 C 11.742188 6.234375 13.230469 5.359375 14.894531 5.472656 C 16.890625 5.628906 18.386719 6.394531 19.382812 7.765625 C 15.273438 10.160156 16.246094 15.402344 20.019531 16.875 C 19.265625 18.796875 18.296875 20.691406 16.671875 22.097656 Z M 10.046875 5.449219 C 9.855469 2.597656 12.242188 0.253906 14.988281 0.0234375 C 15.367188 3.3125 11.898438 5.773438 10.046875 5.449219 Z M 10.046875 5.449219 " />
        </g>
    </svg>

export const GreenAppStoreLogo = ({className}: ClassNameProp) =>
    <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="30px" height="35px" viewBox="0 0 30 35" version="1.1">
        <g id="surface1">
            <ThemePath stroke='none' fillRule='nonzero' d="M 25.011719 33.601562 C 23.082031 35.441406 20.949219 35.152344 18.917969 34.285156 C 16.761719 33.402344 14.785156 33.34375 12.507812 34.285156 C 9.667969 35.488281 8.160156 35.140625 6.449219 33.601562 C -3.207031 23.835938 -1.78125 8.960938 9.191406 8.398438 C 11.855469 8.539062 13.71875 9.84375 15.285156 9.953125 C 17.613281 9.488281 19.84375 8.15625 22.339844 8.328125 C 25.335938 8.566406 27.578125 9.730469 29.074219 11.820312 C 22.910156 15.460938 24.371094 23.441406 30.03125 25.679688 C 28.898438 28.601562 27.445312 31.488281 25.007812 33.625 Z M 15.070312 8.296875 C 14.78125 3.953125 18.363281 0.386719 22.480469 0.0351562 C 23.046875 5.039062 17.851562 8.785156 15.070312 8.296875 Z M 15.070312 8.296875 " />
        </g>
    </svg>

export const PlayStoreLogo = ({className}: ClassNameProp) =>
    <svg className={className} style={{ position: 'relative', left: '1px' }} xmlns="http://www.w3.org/2000/svg" height="24px" width="22px" id="svg60" version="1.1" viewBox="0 0 30 32">
        <defs id="defs38">
            <linearGradient gradientUnits="userSpaceOnUse" y2="21.86" x2="-5.9" y1="1.87" x1="14.09" id="linear-gradient">
                <stop id="stop4" stopColor="#008eff" offset="0" />
                <stop id="stop6" stopColor="#008fff" offset=".01" />
                <stop id="stop8" stopColor="#00acff" offset=".26" />
                <stop id="stop10" stopColor="#00c0ff" offset=".51" />
                <stop id="stop12" stopColor="#00cdff" offset=".76" />
                <stop id="stop14" stopColor="#00d1ff" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="15.32" x2="-2.37" y1="15.32" x1="26.45" id="linear-gradient-2">
                <stop id="stop17" stopColor="#ffd800" offset="0" />
                <stop id="stop19" stopColor="#ff8a00" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="45.15" x2="-9.41" y1="18.05" x1="17.69" id="linear-gradient-3">
                <stop id="stop22" stopColor="#ff3a44" offset="0" />
                <stop id="stop24" stopColor="#b11162" offset="1" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="3.81" x2="8.92" y1="-8.29" x1="-3.19" id="linear-gradient-4">
                <stop id="stop27" stopColor="#328e71" offset="0" />
                <stop id="stop29" stopColor="#2d9571" offset=".07" />
                <stop id="stop31" stopColor="#15bd74" offset=".48" />
                <stop id="stop33" stopColor="#06d575" offset=".8" />
                <stop id="stop35" stopColor="#00de76" offset="1" />
            </linearGradient>
        </defs>
        <g transform="translate(.004)" id="g58">
            <g id="g56">
                <path id="path40" d="M.55.48A2.39 2.39 0 000 2.15v26.34a2.41 2.41 0 00.55 1.67l.09.09 14.75-14.76v-.35L.64.39z" fill="url(#linear-gradient)" />
                <path id="path42" d="M20.31 20.41l-4.92-4.92v-.35l4.92-4.91.11.06 5.83 3.31c1.67.94 1.67 2.49 0 3.44l-5.83 3.31z" fill="url(#linear-gradient-2)" />
                <path id="path44" d="M20.42 20.35l-5-5L.55 30.16a2 2 0 002.45.07l17.39-9.88" fill="url(#linear-gradient-3)" />
                <path id="path46" d="M20.42 10.29L3 .4A1.93 1.93 0 00.55.48l14.84 14.84z" fill="url(#linear-gradient-4)" />
                <path id="path48" d="M20.31 20.24L3 30.06a2 2 0 01-2.39 0l-.09.09.09.09a2 2 0 002.39 0l17.39-9.88z" opacity=".1" />
                <path id="path50" d="M.55 30A2.43 2.43 0 010 28.32v.17a2.41 2.41 0 00.55 1.67l.09-.09z" />
                <path id="path52" d="M26.25 16.86l-5.94 3.38.11.11L26.25 17a2.11 2.11 0 001.25-1.72 2.21 2.21 0 01-1.25 1.58z" />
                <path id="path54" d="M3 .58l23.25 13.19a2.2 2.2 0 011.25 1.55 2.09 2.09 0 00-1.25-1.72L3 .4C1.36-.54 0 .24 0 2.15v.17C0 .42 1.36-.37 3 .58z" fill="#fff" opacity=".3" />
            </g>
        </g>
    </svg>