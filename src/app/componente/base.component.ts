export abstract class BaseComponent {

    public loading = false;
    public exibirAlertDanger: boolean;
    public exibirAlertWarning: boolean;
    public msgAlertDanger: string;
    public msgAlertWarning: string;

    constructor() { }

    isVazia(lista: any[]) {
        return !lista || (lista && lista.length === 0);
    }

    isNotVazia(lista: any[]) {
        return lista && lista.length > 0;
    }

    exibirLoading() {
        this.loading = true;
    }

    esconderLoading() {
        this.loading = false;
    }

    exibirAlertaDanger(mensagem: string): void {
        this.msgAlertDanger = mensagem;
        this.exibirAlertDanger = true;
    }

    hideAlertaDanger(): void {
        this.msgAlertDanger = '';
        this.exibirAlertDanger = false;
    }

    exibirAlertaWarning(mensagem: string): void {
        this.msgAlertWarning = mensagem;
        this.exibirAlertWarning = true;
    }

    hideAlertaWarning(): void {
        this.msgAlertWarning = '';
        this.exibirAlertWarning = false;
    }

}
