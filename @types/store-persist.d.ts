export interface IPersistOutput {
    [property: string]: string ;
}
export interface IPersist {
    persistInput(stored: IPersistOutput): void;
    persistOutput(): IPersistOutput;
}
