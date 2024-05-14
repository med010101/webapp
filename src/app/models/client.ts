export interface Client {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    personalMobile1?: number;
    personalMobile2?: number;
    birthDate?: Date;
    rdvPaymentHandler?: string;
    cardHolder?: string;
    cardNumber?: number;
    month?: number;
    year?: number;
    cvv?: number;
}
