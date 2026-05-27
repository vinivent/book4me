export declare const UserRole: {
    readonly DONO: "DONO";
    readonly CLIENTE: "CLIENTE";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const BookingStatus: {
    readonly CONFIRMADO: "CONFIRMADO";
    readonly CANCELADO: "CANCELADO";
};
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
