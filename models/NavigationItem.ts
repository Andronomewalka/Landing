export default interface NavigationItem {
    readonly id: number
    readonly title: string
    isSelected: boolean
    onClick?(item: NavigationItem): void
} 