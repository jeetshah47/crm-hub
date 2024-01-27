export interface SectionType {
    title: string,
    filter: React.ReactNode,
    button: boolean,
    buttonType: ButtonType
}

type ButtonType = 'Add' | 'Setting' | 'Filter';