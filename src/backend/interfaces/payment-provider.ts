export interface IBeneficiary {
    get: (id: string) => any;
    create: (data: any) => any;
}

export interface IVirtualAccount {
    create: (data: any) => any;
}

export interface IPaymentProvider {
    beneficiary: IBeneficiary
    virtualAccount: IVirtualAccount;
}