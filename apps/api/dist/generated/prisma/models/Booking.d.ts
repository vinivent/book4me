import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BookingModel = runtime.Types.Result.DefaultSelection<Prisma.$BookingPayload>;
export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
};
export type BookingMinAggregateOutputType = {
    id: string | null;
    slotId: string | null;
    serviceId: string | null;
    userId: string | null;
    clienteNome: string | null;
    clienteTelefone: string | null;
    clienteEmail: string | null;
    status: $Enums.BookingStatus | null;
    createdAt: Date | null;
};
export type BookingMaxAggregateOutputType = {
    id: string | null;
    slotId: string | null;
    serviceId: string | null;
    userId: string | null;
    clienteNome: string | null;
    clienteTelefone: string | null;
    clienteEmail: string | null;
    status: $Enums.BookingStatus | null;
    createdAt: Date | null;
};
export type BookingCountAggregateOutputType = {
    id: number;
    slotId: number;
    serviceId: number;
    userId: number;
    clienteNome: number;
    clienteTelefone: number;
    clienteEmail: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type BookingMinAggregateInputType = {
    id?: true;
    slotId?: true;
    serviceId?: true;
    userId?: true;
    clienteNome?: true;
    clienteTelefone?: true;
    clienteEmail?: true;
    status?: true;
    createdAt?: true;
};
export type BookingMaxAggregateInputType = {
    id?: true;
    slotId?: true;
    serviceId?: true;
    userId?: true;
    clienteNome?: true;
    clienteTelefone?: true;
    clienteEmail?: true;
    status?: true;
    createdAt?: true;
};
export type BookingCountAggregateInputType = {
    id?: true;
    slotId?: true;
    serviceId?: true;
    userId?: true;
    clienteNome?: true;
    clienteTelefone?: true;
    clienteEmail?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type BookingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookingCountAggregateInputType;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
};
export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBooking[P]> : Prisma.GetScalarType<T[P], AggregateBooking[P]>;
};
export type BookingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithAggregationInput | Prisma.BookingOrderByWithAggregationInput[];
    by: Prisma.BookingScalarFieldEnum[] | Prisma.BookingScalarFieldEnum;
    having?: Prisma.BookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
};
export type BookingGroupByOutputType = {
    id: string;
    slotId: string;
    serviceId: string;
    userId: string | null;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status: $Enums.BookingStatus;
    createdAt: Date;
    _count: BookingCountAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
};
export type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookingGroupByOutputType[P]>;
}>>;
export type BookingWhereInput = {
    AND?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    OR?: Prisma.BookingWhereInput[];
    NOT?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    id?: Prisma.StringFilter<"Booking"> | string;
    slotId?: Prisma.StringFilter<"Booking"> | string;
    serviceId?: Prisma.StringFilter<"Booking"> | string;
    userId?: Prisma.StringNullableFilter<"Booking"> | string | null;
    clienteNome?: Prisma.StringFilter<"Booking"> | string;
    clienteTelefone?: Prisma.StringFilter<"Booking"> | string;
    clienteEmail?: Prisma.StringFilter<"Booking"> | string;
    status?: Prisma.EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    slot?: Prisma.XOR<Prisma.SlotScalarRelationFilter, Prisma.SlotWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type BookingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    clienteTelefone?: Prisma.SortOrder;
    clienteEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    slot?: Prisma.SlotOrderByWithRelationInput;
    service?: Prisma.ServiceOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    OR?: Prisma.BookingWhereInput[];
    NOT?: Prisma.BookingWhereInput | Prisma.BookingWhereInput[];
    slotId?: Prisma.StringFilter<"Booking"> | string;
    serviceId?: Prisma.StringFilter<"Booking"> | string;
    userId?: Prisma.StringNullableFilter<"Booking"> | string | null;
    clienteNome?: Prisma.StringFilter<"Booking"> | string;
    clienteTelefone?: Prisma.StringFilter<"Booking"> | string;
    clienteEmail?: Prisma.StringFilter<"Booking"> | string;
    status?: Prisma.EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFilter<"Booking"> | Date | string;
    slot?: Prisma.XOR<Prisma.SlotScalarRelationFilter, Prisma.SlotWhereInput>;
    service?: Prisma.XOR<Prisma.ServiceScalarRelationFilter, Prisma.ServiceWhereInput>;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type BookingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    clienteTelefone?: Prisma.SortOrder;
    clienteEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BookingCountOrderByAggregateInput;
    _max?: Prisma.BookingMaxOrderByAggregateInput;
    _min?: Prisma.BookingMinOrderByAggregateInput;
};
export type BookingScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookingScalarWhereWithAggregatesInput | Prisma.BookingScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookingScalarWhereWithAggregatesInput | Prisma.BookingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    slotId?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    serviceId?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Booking"> | string | null;
    clienteNome?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    clienteTelefone?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    clienteEmail?: Prisma.StringWithAggregatesFilter<"Booking"> | string;
    status?: Prisma.EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Booking"> | Date | string;
};
export type BookingCreateInput = {
    id?: string;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    slot: Prisma.SlotCreateNestedOneWithoutBookingsInput;
    service: Prisma.ServiceCreateNestedOneWithoutBookingsInput;
    user?: Prisma.UserCreateNestedOneWithoutBookingsInput;
};
export type BookingUncheckedCreateInput = {
    id?: string;
    slotId: string;
    serviceId: string;
    userId?: string | null;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slot?: Prisma.SlotUpdateOneRequiredWithoutBookingsNestedInput;
    service?: Prisma.ServiceUpdateOneRequiredWithoutBookingsNestedInput;
    user?: Prisma.UserUpdateOneWithoutBookingsNestedInput;
};
export type BookingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingCreateManyInput = {
    id?: string;
    slotId: string;
    serviceId: string;
    userId?: string | null;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingListRelationFilter = {
    every?: Prisma.BookingWhereInput;
    some?: Prisma.BookingWhereInput;
    none?: Prisma.BookingWhereInput;
};
export type BookingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    clienteTelefone?: Prisma.SortOrder;
    clienteEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    clienteTelefone?: Prisma.SortOrder;
    clienteEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slotId?: Prisma.SortOrder;
    serviceId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    clienteNome?: Prisma.SortOrder;
    clienteTelefone?: Prisma.SortOrder;
    clienteEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BookingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutUserInput, Prisma.BookingUncheckedCreateWithoutUserInput> | Prisma.BookingCreateWithoutUserInput[] | Prisma.BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutUserInput | Prisma.BookingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BookingCreateManyUserInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutUserInput, Prisma.BookingUncheckedCreateWithoutUserInput> | Prisma.BookingCreateWithoutUserInput[] | Prisma.BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutUserInput | Prisma.BookingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.BookingCreateManyUserInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutUserInput, Prisma.BookingUncheckedCreateWithoutUserInput> | Prisma.BookingCreateWithoutUserInput[] | Prisma.BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutUserInput | Prisma.BookingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutUserInput | Prisma.BookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BookingCreateManyUserInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutUserInput | Prisma.BookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutUserInput | Prisma.BookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutUserInput, Prisma.BookingUncheckedCreateWithoutUserInput> | Prisma.BookingCreateWithoutUserInput[] | Prisma.BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutUserInput | Prisma.BookingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutUserInput | Prisma.BookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.BookingCreateManyUserInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutUserInput | Prisma.BookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutUserInput | Prisma.BookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutServiceInput, Prisma.BookingUncheckedCreateWithoutServiceInput> | Prisma.BookingCreateWithoutServiceInput[] | Prisma.BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutServiceInput | Prisma.BookingCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.BookingCreateManyServiceInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutServiceInput, Prisma.BookingUncheckedCreateWithoutServiceInput> | Prisma.BookingCreateWithoutServiceInput[] | Prisma.BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutServiceInput | Prisma.BookingCreateOrConnectWithoutServiceInput[];
    createMany?: Prisma.BookingCreateManyServiceInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutServiceInput, Prisma.BookingUncheckedCreateWithoutServiceInput> | Prisma.BookingCreateWithoutServiceInput[] | Prisma.BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutServiceInput | Prisma.BookingCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutServiceInput | Prisma.BookingUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.BookingCreateManyServiceInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutServiceInput | Prisma.BookingUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutServiceInput | Prisma.BookingUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutServiceInput, Prisma.BookingUncheckedCreateWithoutServiceInput> | Prisma.BookingCreateWithoutServiceInput[] | Prisma.BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutServiceInput | Prisma.BookingCreateOrConnectWithoutServiceInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutServiceInput | Prisma.BookingUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: Prisma.BookingCreateManyServiceInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutServiceInput | Prisma.BookingUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutServiceInput | Prisma.BookingUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingCreateNestedManyWithoutSlotInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutSlotInput, Prisma.BookingUncheckedCreateWithoutSlotInput> | Prisma.BookingCreateWithoutSlotInput[] | Prisma.BookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutSlotInput | Prisma.BookingCreateOrConnectWithoutSlotInput[];
    createMany?: Prisma.BookingCreateManySlotInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUncheckedCreateNestedManyWithoutSlotInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutSlotInput, Prisma.BookingUncheckedCreateWithoutSlotInput> | Prisma.BookingCreateWithoutSlotInput[] | Prisma.BookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutSlotInput | Prisma.BookingCreateOrConnectWithoutSlotInput[];
    createMany?: Prisma.BookingCreateManySlotInputEnvelope;
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
};
export type BookingUpdateManyWithoutSlotNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutSlotInput, Prisma.BookingUncheckedCreateWithoutSlotInput> | Prisma.BookingCreateWithoutSlotInput[] | Prisma.BookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutSlotInput | Prisma.BookingCreateOrConnectWithoutSlotInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutSlotInput | Prisma.BookingUpsertWithWhereUniqueWithoutSlotInput[];
    createMany?: Prisma.BookingCreateManySlotInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutSlotInput | Prisma.BookingUpdateWithWhereUniqueWithoutSlotInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutSlotInput | Prisma.BookingUpdateManyWithWhereWithoutSlotInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type BookingUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: Prisma.XOR<Prisma.BookingCreateWithoutSlotInput, Prisma.BookingUncheckedCreateWithoutSlotInput> | Prisma.BookingCreateWithoutSlotInput[] | Prisma.BookingUncheckedCreateWithoutSlotInput[];
    connectOrCreate?: Prisma.BookingCreateOrConnectWithoutSlotInput | Prisma.BookingCreateOrConnectWithoutSlotInput[];
    upsert?: Prisma.BookingUpsertWithWhereUniqueWithoutSlotInput | Prisma.BookingUpsertWithWhereUniqueWithoutSlotInput[];
    createMany?: Prisma.BookingCreateManySlotInputEnvelope;
    set?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    disconnect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    delete?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    connect?: Prisma.BookingWhereUniqueInput | Prisma.BookingWhereUniqueInput[];
    update?: Prisma.BookingUpdateWithWhereUniqueWithoutSlotInput | Prisma.BookingUpdateWithWhereUniqueWithoutSlotInput[];
    updateMany?: Prisma.BookingUpdateManyWithWhereWithoutSlotInput | Prisma.BookingUpdateManyWithWhereWithoutSlotInput[];
    deleteMany?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
};
export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type BookingCreateWithoutUserInput = {
    id?: string;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    slot: Prisma.SlotCreateNestedOneWithoutBookingsInput;
    service: Prisma.ServiceCreateNestedOneWithoutBookingsInput;
};
export type BookingUncheckedCreateWithoutUserInput = {
    id?: string;
    slotId: string;
    serviceId: string;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingCreateOrConnectWithoutUserInput = {
    where: Prisma.BookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingCreateWithoutUserInput, Prisma.BookingUncheckedCreateWithoutUserInput>;
};
export type BookingCreateManyUserInputEnvelope = {
    data: Prisma.BookingCreateManyUserInput | Prisma.BookingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.BookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookingUpdateWithoutUserInput, Prisma.BookingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.BookingCreateWithoutUserInput, Prisma.BookingUncheckedCreateWithoutUserInput>;
};
export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.BookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookingUpdateWithoutUserInput, Prisma.BookingUncheckedUpdateWithoutUserInput>;
};
export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.BookingScalarWhereInput;
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyWithoutUserInput>;
};
export type BookingScalarWhereInput = {
    AND?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
    OR?: Prisma.BookingScalarWhereInput[];
    NOT?: Prisma.BookingScalarWhereInput | Prisma.BookingScalarWhereInput[];
    id?: Prisma.StringFilter<"Booking"> | string;
    slotId?: Prisma.StringFilter<"Booking"> | string;
    serviceId?: Prisma.StringFilter<"Booking"> | string;
    userId?: Prisma.StringNullableFilter<"Booking"> | string | null;
    clienteNome?: Prisma.StringFilter<"Booking"> | string;
    clienteTelefone?: Prisma.StringFilter<"Booking"> | string;
    clienteEmail?: Prisma.StringFilter<"Booking"> | string;
    status?: Prisma.EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFilter<"Booking"> | Date | string;
};
export type BookingCreateWithoutServiceInput = {
    id?: string;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    slot: Prisma.SlotCreateNestedOneWithoutBookingsInput;
    user?: Prisma.UserCreateNestedOneWithoutBookingsInput;
};
export type BookingUncheckedCreateWithoutServiceInput = {
    id?: string;
    slotId: string;
    userId?: string | null;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingCreateOrConnectWithoutServiceInput = {
    where: Prisma.BookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingCreateWithoutServiceInput, Prisma.BookingUncheckedCreateWithoutServiceInput>;
};
export type BookingCreateManyServiceInputEnvelope = {
    data: Prisma.BookingCreateManyServiceInput | Prisma.BookingCreateManyServiceInput[];
    skipDuplicates?: boolean;
};
export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: Prisma.BookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookingUpdateWithoutServiceInput, Prisma.BookingUncheckedUpdateWithoutServiceInput>;
    create: Prisma.XOR<Prisma.BookingCreateWithoutServiceInput, Prisma.BookingUncheckedCreateWithoutServiceInput>;
};
export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: Prisma.BookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookingUpdateWithoutServiceInput, Prisma.BookingUncheckedUpdateWithoutServiceInput>;
};
export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: Prisma.BookingScalarWhereInput;
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyWithoutServiceInput>;
};
export type BookingCreateWithoutSlotInput = {
    id?: string;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
    service: Prisma.ServiceCreateNestedOneWithoutBookingsInput;
    user?: Prisma.UserCreateNestedOneWithoutBookingsInput;
};
export type BookingUncheckedCreateWithoutSlotInput = {
    id?: string;
    serviceId: string;
    userId?: string | null;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingCreateOrConnectWithoutSlotInput = {
    where: Prisma.BookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingCreateWithoutSlotInput, Prisma.BookingUncheckedCreateWithoutSlotInput>;
};
export type BookingCreateManySlotInputEnvelope = {
    data: Prisma.BookingCreateManySlotInput | Prisma.BookingCreateManySlotInput[];
    skipDuplicates?: boolean;
};
export type BookingUpsertWithWhereUniqueWithoutSlotInput = {
    where: Prisma.BookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookingUpdateWithoutSlotInput, Prisma.BookingUncheckedUpdateWithoutSlotInput>;
    create: Prisma.XOR<Prisma.BookingCreateWithoutSlotInput, Prisma.BookingUncheckedCreateWithoutSlotInput>;
};
export type BookingUpdateWithWhereUniqueWithoutSlotInput = {
    where: Prisma.BookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookingUpdateWithoutSlotInput, Prisma.BookingUncheckedUpdateWithoutSlotInput>;
};
export type BookingUpdateManyWithWhereWithoutSlotInput = {
    where: Prisma.BookingScalarWhereInput;
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyWithoutSlotInput>;
};
export type BookingCreateManyUserInput = {
    id?: string;
    slotId: string;
    serviceId: string;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slot?: Prisma.SlotUpdateOneRequiredWithoutBookingsNestedInput;
    service?: Prisma.ServiceUpdateOneRequiredWithoutBookingsNestedInput;
};
export type BookingUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingCreateManyServiceInput = {
    id?: string;
    slotId: string;
    userId?: string | null;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slot?: Prisma.SlotUpdateOneRequiredWithoutBookingsNestedInput;
    user?: Prisma.UserUpdateOneWithoutBookingsNestedInput;
};
export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slotId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingCreateManySlotInput = {
    id?: string;
    serviceId: string;
    userId?: string | null;
    clienteNome: string;
    clienteTelefone: string;
    clienteEmail: string;
    status?: $Enums.BookingStatus;
    createdAt?: Date | string;
};
export type BookingUpdateWithoutSlotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    service?: Prisma.ServiceUpdateOneRequiredWithoutBookingsNestedInput;
    user?: Prisma.UserUpdateOneWithoutBookingsNestedInput;
};
export type BookingUncheckedUpdateWithoutSlotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingUncheckedUpdateManyWithoutSlotInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serviceId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clienteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteTelefone?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slotId?: boolean;
    serviceId?: boolean;
    userId?: boolean;
    clienteNome?: boolean;
    clienteTelefone?: boolean;
    clienteEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    slot?: boolean | Prisma.SlotDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Booking$userArgs<ExtArgs>;
}, ExtArgs["result"]["booking"]>;
export type BookingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slotId?: boolean;
    serviceId?: boolean;
    userId?: boolean;
    clienteNome?: boolean;
    clienteTelefone?: boolean;
    clienteEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    slot?: boolean | Prisma.SlotDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Booking$userArgs<ExtArgs>;
}, ExtArgs["result"]["booking"]>;
export type BookingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slotId?: boolean;
    serviceId?: boolean;
    userId?: boolean;
    clienteNome?: boolean;
    clienteTelefone?: boolean;
    clienteEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    slot?: boolean | Prisma.SlotDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Booking$userArgs<ExtArgs>;
}, ExtArgs["result"]["booking"]>;
export type BookingSelectScalar = {
    id?: boolean;
    slotId?: boolean;
    serviceId?: boolean;
    userId?: boolean;
    clienteNome?: boolean;
    clienteTelefone?: boolean;
    clienteEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type BookingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slotId" | "serviceId" | "userId" | "clienteNome" | "clienteTelefone" | "clienteEmail" | "status" | "createdAt", ExtArgs["result"]["booking"]>;
export type BookingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    slot?: boolean | Prisma.SlotDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Booking$userArgs<ExtArgs>;
};
export type BookingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    slot?: boolean | Prisma.SlotDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Booking$userArgs<ExtArgs>;
};
export type BookingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    slot?: boolean | Prisma.SlotDefaultArgs<ExtArgs>;
    service?: boolean | Prisma.ServiceDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.Booking$userArgs<ExtArgs>;
};
export type $BookingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Booking";
    objects: {
        slot: Prisma.$SlotPayload<ExtArgs>;
        service: Prisma.$ServicePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        slotId: string;
        serviceId: string;
        userId: string | null;
        clienteNome: string;
        clienteTelefone: string;
        clienteEmail: string;
        status: $Enums.BookingStatus;
        createdAt: Date;
    }, ExtArgs["result"]["booking"]>;
    composites: {};
};
export type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookingPayload, S>;
export type BookingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookingCountAggregateInputType | true;
};
export interface BookingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Booking'];
        meta: {
            name: 'Booking';
        };
    };
    findUnique<T extends BookingFindUniqueArgs>(args: Prisma.SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookingFindFirstArgs>(args?: Prisma.SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookingFindManyArgs>(args?: Prisma.SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookingCreateArgs>(args: Prisma.SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookingCreateManyArgs>(args?: Prisma.SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookingDeleteArgs>(args: Prisma.SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookingUpdateArgs>(args: Prisma.SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookingDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookingUpdateManyArgs>(args: Prisma.SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookingUpsertArgs>(args: Prisma.SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma.Prisma__BookingClient<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookingCountArgs>(args?: Prisma.Subset<T, BookingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookingCountAggregateOutputType> : number>;
    aggregate<T extends BookingAggregateArgs>(args: Prisma.Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>;
    groupBy<T extends BookingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookingGroupByArgs['orderBy'];
    } : {
        orderBy?: BookingGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookingFieldRefs;
}
export interface Prisma__BookingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    slot<T extends Prisma.SlotDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SlotDefaultArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    service<T extends Prisma.ServiceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServiceDefaultArgs<ExtArgs>>): Prisma.Prisma__ServiceClient<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.Booking$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Booking$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookingFieldRefs {
    readonly id: Prisma.FieldRef<"Booking", 'String'>;
    readonly slotId: Prisma.FieldRef<"Booking", 'String'>;
    readonly serviceId: Prisma.FieldRef<"Booking", 'String'>;
    readonly userId: Prisma.FieldRef<"Booking", 'String'>;
    readonly clienteNome: Prisma.FieldRef<"Booking", 'String'>;
    readonly clienteTelefone: Prisma.FieldRef<"Booking", 'String'>;
    readonly clienteEmail: Prisma.FieldRef<"Booking", 'String'>;
    readonly status: Prisma.FieldRef<"Booking", 'BookingStatus'>;
    readonly createdAt: Prisma.FieldRef<"Booking", 'DateTime'>;
}
export type BookingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
export type BookingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
export type BookingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
export type BookingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingCreateInput, Prisma.BookingUncheckedCreateInput>;
};
export type BookingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookingCreateManyInput | Prisma.BookingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    data: Prisma.BookingCreateManyInput | Prisma.BookingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BookingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingUpdateInput, Prisma.BookingUncheckedUpdateInput>;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyInput>;
    where?: Prisma.BookingWhereInput;
    limit?: number;
};
export type BookingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookingUpdateManyMutationInput, Prisma.BookingUncheckedUpdateManyInput>;
    where?: Prisma.BookingWhereInput;
    limit?: number;
    include?: Prisma.BookingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookingCreateInput, Prisma.BookingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookingUpdateInput, Prisma.BookingUncheckedUpdateInput>;
};
export type BookingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where: Prisma.BookingWhereUniqueInput;
};
export type BookingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
    limit?: number;
};
export type Booking$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type BookingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingSelect<ExtArgs> | null;
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    include?: Prisma.BookingInclude<ExtArgs> | null;
};
