import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BusinessModel = runtime.Types.Result.DefaultSelection<Prisma.$BusinessPayload>;
export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
};
export type BusinessMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    tipo: string | null;
    ownerId: string | null;
    createdAt: Date | null;
};
export type BusinessMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    tipo: string | null;
    ownerId: string | null;
    createdAt: Date | null;
};
export type BusinessCountAggregateOutputType = {
    id: number;
    nome: number;
    tipo: number;
    ownerId: number;
    createdAt: number;
    _all: number;
};
export type BusinessMinAggregateInputType = {
    id?: true;
    nome?: true;
    tipo?: true;
    ownerId?: true;
    createdAt?: true;
};
export type BusinessMaxAggregateInputType = {
    id?: true;
    nome?: true;
    tipo?: true;
    ownerId?: true;
    createdAt?: true;
};
export type BusinessCountAggregateInputType = {
    id?: true;
    nome?: true;
    tipo?: true;
    ownerId?: true;
    createdAt?: true;
    _all?: true;
};
export type BusinessAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BusinessCountAggregateInputType;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
};
export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBusiness[P]> : Prisma.GetScalarType<T[P], AggregateBusiness[P]>;
};
export type BusinessGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithAggregationInput | Prisma.BusinessOrderByWithAggregationInput[];
    by: Prisma.BusinessScalarFieldEnum[] | Prisma.BusinessScalarFieldEnum;
    having?: Prisma.BusinessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessCountAggregateInputType | true;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
};
export type BusinessGroupByOutputType = {
    id: string;
    nome: string;
    tipo: string;
    ownerId: string;
    createdAt: Date;
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
};
export type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BusinessGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BusinessGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BusinessGroupByOutputType[P]>;
}>>;
export type BusinessWhereInput = {
    AND?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    OR?: Prisma.BusinessWhereInput[];
    NOT?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    id?: Prisma.StringFilter<"Business"> | string;
    nome?: Prisma.StringFilter<"Business"> | string;
    tipo?: Prisma.StringFilter<"Business"> | string;
    ownerId?: Prisma.StringFilter<"Business"> | string;
    createdAt?: Prisma.DateTimeFilter<"Business"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    services?: Prisma.ServiceListRelationFilter;
    slots?: Prisma.SlotListRelationFilter;
};
export type BusinessOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    services?: Prisma.ServiceOrderByRelationAggregateInput;
    slots?: Prisma.SlotOrderByRelationAggregateInput;
};
export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    OR?: Prisma.BusinessWhereInput[];
    NOT?: Prisma.BusinessWhereInput | Prisma.BusinessWhereInput[];
    nome?: Prisma.StringFilter<"Business"> | string;
    tipo?: Prisma.StringFilter<"Business"> | string;
    ownerId?: Prisma.StringFilter<"Business"> | string;
    createdAt?: Prisma.DateTimeFilter<"Business"> | Date | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    services?: Prisma.ServiceListRelationFilter;
    slots?: Prisma.SlotListRelationFilter;
}, "id">;
export type BusinessOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.BusinessCountOrderByAggregateInput;
    _max?: Prisma.BusinessMaxOrderByAggregateInput;
    _min?: Prisma.BusinessMinOrderByAggregateInput;
};
export type BusinessScalarWhereWithAggregatesInput = {
    AND?: Prisma.BusinessScalarWhereWithAggregatesInput | Prisma.BusinessScalarWhereWithAggregatesInput[];
    OR?: Prisma.BusinessScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BusinessScalarWhereWithAggregatesInput | Prisma.BusinessScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Business"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Business"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"Business"> | string;
    ownerId?: Prisma.StringWithAggregatesFilter<"Business"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Business"> | Date | string;
};
export type BusinessCreateInput = {
    id?: string;
    nome: string;
    tipo: string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutOwnedBusinessesInput;
    services?: Prisma.ServiceCreateNestedManyWithoutBusinessInput;
    slots?: Prisma.SlotCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateInput = {
    id?: string;
    nome: string;
    tipo: string;
    ownerId: string;
    createdAt?: Date | string;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutBusinessInput;
    slots?: Prisma.SlotUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOwnedBusinessesNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutBusinessNestedInput;
    slots?: Prisma.SlotUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutBusinessNestedInput;
    slots?: Prisma.SlotUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateManyInput = {
    id?: string;
    nome: string;
    tipo: string;
    ownerId: string;
    createdAt?: Date | string;
};
export type BusinessUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessListRelationFilter = {
    every?: Prisma.BusinessWhereInput;
    some?: Prisma.BusinessWhereInput;
    none?: Prisma.BusinessWhereInput;
};
export type BusinessOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BusinessCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BusinessMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BusinessMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BusinessScalarRelationFilter = {
    is?: Prisma.BusinessWhereInput;
    isNot?: Prisma.BusinessWhereInput;
};
export type BusinessCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutOwnerInput, Prisma.BusinessUncheckedCreateWithoutOwnerInput> | Prisma.BusinessCreateWithoutOwnerInput[] | Prisma.BusinessUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutOwnerInput | Prisma.BusinessCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.BusinessCreateManyOwnerInputEnvelope;
    connect?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
};
export type BusinessUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutOwnerInput, Prisma.BusinessUncheckedCreateWithoutOwnerInput> | Prisma.BusinessCreateWithoutOwnerInput[] | Prisma.BusinessUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutOwnerInput | Prisma.BusinessCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.BusinessCreateManyOwnerInputEnvelope;
    connect?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
};
export type BusinessUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutOwnerInput, Prisma.BusinessUncheckedCreateWithoutOwnerInput> | Prisma.BusinessCreateWithoutOwnerInput[] | Prisma.BusinessUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutOwnerInput | Prisma.BusinessCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.BusinessUpsertWithWhereUniqueWithoutOwnerInput | Prisma.BusinessUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.BusinessCreateManyOwnerInputEnvelope;
    set?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    disconnect?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    delete?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    connect?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    update?: Prisma.BusinessUpdateWithWhereUniqueWithoutOwnerInput | Prisma.BusinessUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.BusinessUpdateManyWithWhereWithoutOwnerInput | Prisma.BusinessUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.BusinessScalarWhereInput | Prisma.BusinessScalarWhereInput[];
};
export type BusinessUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutOwnerInput, Prisma.BusinessUncheckedCreateWithoutOwnerInput> | Prisma.BusinessCreateWithoutOwnerInput[] | Prisma.BusinessUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutOwnerInput | Prisma.BusinessCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.BusinessUpsertWithWhereUniqueWithoutOwnerInput | Prisma.BusinessUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.BusinessCreateManyOwnerInputEnvelope;
    set?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    disconnect?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    delete?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    connect?: Prisma.BusinessWhereUniqueInput | Prisma.BusinessWhereUniqueInput[];
    update?: Prisma.BusinessUpdateWithWhereUniqueWithoutOwnerInput | Prisma.BusinessUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.BusinessUpdateManyWithWhereWithoutOwnerInput | Prisma.BusinessUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.BusinessScalarWhereInput | Prisma.BusinessScalarWhereInput[];
};
export type BusinessCreateNestedOneWithoutServicesInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutServicesInput, Prisma.BusinessUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutServicesInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutServicesNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutServicesInput, Prisma.BusinessUncheckedCreateWithoutServicesInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutServicesInput;
    upsert?: Prisma.BusinessUpsertWithoutServicesInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutServicesInput, Prisma.BusinessUpdateWithoutServicesInput>, Prisma.BusinessUncheckedUpdateWithoutServicesInput>;
};
export type BusinessCreateNestedOneWithoutSlotsInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutSlotsInput, Prisma.BusinessUncheckedCreateWithoutSlotsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutSlotsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: Prisma.XOR<Prisma.BusinessCreateWithoutSlotsInput, Prisma.BusinessUncheckedCreateWithoutSlotsInput>;
    connectOrCreate?: Prisma.BusinessCreateOrConnectWithoutSlotsInput;
    upsert?: Prisma.BusinessUpsertWithoutSlotsInput;
    connect?: Prisma.BusinessWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BusinessUpdateToOneWithWhereWithoutSlotsInput, Prisma.BusinessUpdateWithoutSlotsInput>, Prisma.BusinessUncheckedUpdateWithoutSlotsInput>;
};
export type BusinessCreateWithoutOwnerInput = {
    id?: string;
    nome: string;
    tipo: string;
    createdAt?: Date | string;
    services?: Prisma.ServiceCreateNestedManyWithoutBusinessInput;
    slots?: Prisma.SlotCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutOwnerInput = {
    id?: string;
    nome: string;
    tipo: string;
    createdAt?: Date | string;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutBusinessInput;
    slots?: Prisma.SlotUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutOwnerInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutOwnerInput, Prisma.BusinessUncheckedCreateWithoutOwnerInput>;
};
export type BusinessCreateManyOwnerInputEnvelope = {
    data: Prisma.BusinessCreateManyOwnerInput | Prisma.BusinessCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type BusinessUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.BusinessWhereUniqueInput;
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutOwnerInput, Prisma.BusinessUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutOwnerInput, Prisma.BusinessUncheckedCreateWithoutOwnerInput>;
};
export type BusinessUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.BusinessWhereUniqueInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutOwnerInput, Prisma.BusinessUncheckedUpdateWithoutOwnerInput>;
};
export type BusinessUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.BusinessScalarWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateManyMutationInput, Prisma.BusinessUncheckedUpdateManyWithoutOwnerInput>;
};
export type BusinessScalarWhereInput = {
    AND?: Prisma.BusinessScalarWhereInput | Prisma.BusinessScalarWhereInput[];
    OR?: Prisma.BusinessScalarWhereInput[];
    NOT?: Prisma.BusinessScalarWhereInput | Prisma.BusinessScalarWhereInput[];
    id?: Prisma.StringFilter<"Business"> | string;
    nome?: Prisma.StringFilter<"Business"> | string;
    tipo?: Prisma.StringFilter<"Business"> | string;
    ownerId?: Prisma.StringFilter<"Business"> | string;
    createdAt?: Prisma.DateTimeFilter<"Business"> | Date | string;
};
export type BusinessCreateWithoutServicesInput = {
    id?: string;
    nome: string;
    tipo: string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutOwnedBusinessesInput;
    slots?: Prisma.SlotCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutServicesInput = {
    id?: string;
    nome: string;
    tipo: string;
    ownerId: string;
    createdAt?: Date | string;
    slots?: Prisma.SlotUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutServicesInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutServicesInput, Prisma.BusinessUncheckedCreateWithoutServicesInput>;
};
export type BusinessUpsertWithoutServicesInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutServicesInput, Prisma.BusinessUncheckedUpdateWithoutServicesInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutServicesInput, Prisma.BusinessUncheckedCreateWithoutServicesInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutServicesInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutServicesInput, Prisma.BusinessUncheckedUpdateWithoutServicesInput>;
};
export type BusinessUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOwnedBusinessesNestedInput;
    slots?: Prisma.SlotUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutServicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    slots?: Prisma.SlotUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateWithoutSlotsInput = {
    id?: string;
    nome: string;
    tipo: string;
    createdAt?: Date | string;
    owner: Prisma.UserCreateNestedOneWithoutOwnedBusinessesInput;
    services?: Prisma.ServiceCreateNestedManyWithoutBusinessInput;
};
export type BusinessUncheckedCreateWithoutSlotsInput = {
    id?: string;
    nome: string;
    tipo: string;
    ownerId: string;
    createdAt?: Date | string;
    services?: Prisma.ServiceUncheckedCreateNestedManyWithoutBusinessInput;
};
export type BusinessCreateOrConnectWithoutSlotsInput = {
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutSlotsInput, Prisma.BusinessUncheckedCreateWithoutSlotsInput>;
};
export type BusinessUpsertWithoutSlotsInput = {
    update: Prisma.XOR<Prisma.BusinessUpdateWithoutSlotsInput, Prisma.BusinessUncheckedUpdateWithoutSlotsInput>;
    create: Prisma.XOR<Prisma.BusinessCreateWithoutSlotsInput, Prisma.BusinessUncheckedCreateWithoutSlotsInput>;
    where?: Prisma.BusinessWhereInput;
};
export type BusinessUpdateToOneWithWhereWithoutSlotsInput = {
    where?: Prisma.BusinessWhereInput;
    data: Prisma.XOR<Prisma.BusinessUpdateWithoutSlotsInput, Prisma.BusinessUncheckedUpdateWithoutSlotsInput>;
};
export type BusinessUpdateWithoutSlotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    owner?: Prisma.UserUpdateOneRequiredWithoutOwnedBusinessesNestedInput;
    services?: Prisma.ServiceUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutSlotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessCreateManyOwnerInput = {
    id?: string;
    nome: string;
    tipo: string;
    createdAt?: Date | string;
};
export type BusinessUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    services?: Prisma.ServiceUpdateManyWithoutBusinessNestedInput;
    slots?: Prisma.SlotUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    services?: Prisma.ServiceUncheckedUpdateManyWithoutBusinessNestedInput;
    slots?: Prisma.SlotUncheckedUpdateManyWithoutBusinessNestedInput;
};
export type BusinessUncheckedUpdateManyWithoutOwnerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BusinessCountOutputType = {
    services: number;
    slots: number;
};
export type BusinessCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    services?: boolean | BusinessCountOutputTypeCountServicesArgs;
    slots?: boolean | BusinessCountOutputTypeCountSlotsArgs;
};
export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessCountOutputTypeSelect<ExtArgs> | null;
};
export type BusinessCountOutputTypeCountServicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServiceWhereInput;
};
export type BusinessCountOutputTypeCountSlotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SlotWhereInput;
};
export type BusinessSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    tipo?: boolean;
    ownerId?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    services?: boolean | Prisma.Business$servicesArgs<ExtArgs>;
    slots?: boolean | Prisma.Business$slotsArgs<ExtArgs>;
    _count?: boolean | Prisma.BusinessCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["business"]>;
export type BusinessSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    tipo?: boolean;
    ownerId?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["business"]>;
export type BusinessSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    tipo?: boolean;
    ownerId?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["business"]>;
export type BusinessSelectScalar = {
    id?: boolean;
    nome?: boolean;
    tipo?: boolean;
    ownerId?: boolean;
    createdAt?: boolean;
};
export type BusinessOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "tipo" | "ownerId" | "createdAt", ExtArgs["result"]["business"]>;
export type BusinessInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    services?: boolean | Prisma.Business$servicesArgs<ExtArgs>;
    slots?: boolean | Prisma.Business$slotsArgs<ExtArgs>;
    _count?: boolean | Prisma.BusinessCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BusinessIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $BusinessPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Business";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        services: Prisma.$ServicePayload<ExtArgs>[];
        slots: Prisma.$SlotPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        tipo: string;
        ownerId: string;
        createdAt: Date;
    }, ExtArgs["result"]["business"]>;
    composites: {};
};
export type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BusinessPayload, S>;
export type BusinessCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BusinessCountAggregateInputType | true;
};
export interface BusinessDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Business'];
        meta: {
            name: 'Business';
        };
    };
    findUnique<T extends BusinessFindUniqueArgs>(args: Prisma.SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BusinessFindFirstArgs>(args?: Prisma.SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BusinessFindManyArgs>(args?: Prisma.SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BusinessCreateArgs>(args: Prisma.SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BusinessCreateManyArgs>(args?: Prisma.SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BusinessDeleteArgs>(args: Prisma.SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BusinessUpdateArgs>(args: Prisma.SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BusinessDeleteManyArgs>(args?: Prisma.SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BusinessUpdateManyArgs>(args: Prisma.SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BusinessUpsertArgs>(args: Prisma.SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BusinessCountArgs>(args?: Prisma.Subset<T, BusinessCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BusinessCountAggregateOutputType> : number>;
    aggregate<T extends BusinessAggregateArgs>(args: Prisma.Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>;
    groupBy<T extends BusinessGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BusinessGroupByArgs['orderBy'];
    } : {
        orderBy?: BusinessGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BusinessFieldRefs;
}
export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    services<T extends Prisma.Business$servicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    slots<T extends Prisma.Business$slotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Business$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BusinessFieldRefs {
    readonly id: Prisma.FieldRef<"Business", 'String'>;
    readonly nome: Prisma.FieldRef<"Business", 'String'>;
    readonly tipo: Prisma.FieldRef<"Business", 'String'>;
    readonly ownerId: Prisma.FieldRef<"Business", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Business", 'DateTime'>;
}
export type BusinessFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessScalarFieldEnum | Prisma.BusinessScalarFieldEnum[];
};
export type BusinessFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessScalarFieldEnum | Prisma.BusinessScalarFieldEnum[];
};
export type BusinessFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where?: Prisma.BusinessWhereInput;
    orderBy?: Prisma.BusinessOrderByWithRelationInput | Prisma.BusinessOrderByWithRelationInput[];
    cursor?: Prisma.BusinessWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BusinessScalarFieldEnum | Prisma.BusinessScalarFieldEnum[];
};
export type BusinessCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessCreateInput, Prisma.BusinessUncheckedCreateInput>;
};
export type BusinessCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BusinessCreateManyInput | Prisma.BusinessCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BusinessCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    data: Prisma.BusinessCreateManyInput | Prisma.BusinessCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BusinessIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BusinessUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessUpdateInput, Prisma.BusinessUncheckedUpdateInput>;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BusinessUpdateManyMutationInput, Prisma.BusinessUncheckedUpdateManyInput>;
    where?: Prisma.BusinessWhereInput;
    limit?: number;
};
export type BusinessUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BusinessUpdateManyMutationInput, Prisma.BusinessUncheckedUpdateManyInput>;
    where?: Prisma.BusinessWhereInput;
    limit?: number;
    include?: Prisma.BusinessIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BusinessUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
    create: Prisma.XOR<Prisma.BusinessCreateInput, Prisma.BusinessUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BusinessUpdateInput, Prisma.BusinessUncheckedUpdateInput>;
};
export type BusinessDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
    where: Prisma.BusinessWhereUniqueInput;
};
export type BusinessDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BusinessWhereInput;
    limit?: number;
};
export type Business$servicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServiceSelect<ExtArgs> | null;
    omit?: Prisma.ServiceOmit<ExtArgs> | null;
    include?: Prisma.ServiceInclude<ExtArgs> | null;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput | Prisma.ServiceOrderByWithRelationInput[];
    cursor?: Prisma.ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServiceScalarFieldEnum | Prisma.ServiceScalarFieldEnum[];
};
export type Business$slotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
    where?: Prisma.SlotWhereInput;
    orderBy?: Prisma.SlotOrderByWithRelationInput | Prisma.SlotOrderByWithRelationInput[];
    cursor?: Prisma.SlotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SlotScalarFieldEnum | Prisma.SlotScalarFieldEnum[];
};
export type BusinessDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BusinessSelect<ExtArgs> | null;
    omit?: Prisma.BusinessOmit<ExtArgs> | null;
    include?: Prisma.BusinessInclude<ExtArgs> | null;
};
