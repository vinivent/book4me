import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type SlotModel = runtime.Types.Result.DefaultSelection<Prisma.$SlotPayload>;
export type AggregateSlot = {
    _count: SlotCountAggregateOutputType | null;
    _min: SlotMinAggregateOutputType | null;
    _max: SlotMaxAggregateOutputType | null;
};
export type SlotMinAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    inicio: Date | null;
    fim: Date | null;
    disponivel: boolean | null;
    createdAt: Date | null;
};
export type SlotMaxAggregateOutputType = {
    id: string | null;
    businessId: string | null;
    inicio: Date | null;
    fim: Date | null;
    disponivel: boolean | null;
    createdAt: Date | null;
};
export type SlotCountAggregateOutputType = {
    id: number;
    businessId: number;
    inicio: number;
    fim: number;
    disponivel: number;
    createdAt: number;
    _all: number;
};
export type SlotMinAggregateInputType = {
    id?: true;
    businessId?: true;
    inicio?: true;
    fim?: true;
    disponivel?: true;
    createdAt?: true;
};
export type SlotMaxAggregateInputType = {
    id?: true;
    businessId?: true;
    inicio?: true;
    fim?: true;
    disponivel?: true;
    createdAt?: true;
};
export type SlotCountAggregateInputType = {
    id?: true;
    businessId?: true;
    inicio?: true;
    fim?: true;
    disponivel?: true;
    createdAt?: true;
    _all?: true;
};
export type SlotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SlotWhereInput;
    orderBy?: Prisma.SlotOrderByWithRelationInput | Prisma.SlotOrderByWithRelationInput[];
    cursor?: Prisma.SlotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SlotCountAggregateInputType;
    _min?: SlotMinAggregateInputType;
    _max?: SlotMaxAggregateInputType;
};
export type GetSlotAggregateType<T extends SlotAggregateArgs> = {
    [P in keyof T & keyof AggregateSlot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSlot[P]> : Prisma.GetScalarType<T[P], AggregateSlot[P]>;
};
export type SlotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SlotWhereInput;
    orderBy?: Prisma.SlotOrderByWithAggregationInput | Prisma.SlotOrderByWithAggregationInput[];
    by: Prisma.SlotScalarFieldEnum[] | Prisma.SlotScalarFieldEnum;
    having?: Prisma.SlotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SlotCountAggregateInputType | true;
    _min?: SlotMinAggregateInputType;
    _max?: SlotMaxAggregateInputType;
};
export type SlotGroupByOutputType = {
    id: string;
    businessId: string;
    inicio: Date;
    fim: Date;
    disponivel: boolean;
    createdAt: Date;
    _count: SlotCountAggregateOutputType | null;
    _min: SlotMinAggregateOutputType | null;
    _max: SlotMaxAggregateOutputType | null;
};
export type GetSlotGroupByPayload<T extends SlotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SlotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SlotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SlotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SlotGroupByOutputType[P]>;
}>>;
export type SlotWhereInput = {
    AND?: Prisma.SlotWhereInput | Prisma.SlotWhereInput[];
    OR?: Prisma.SlotWhereInput[];
    NOT?: Prisma.SlotWhereInput | Prisma.SlotWhereInput[];
    id?: Prisma.StringFilter<"Slot"> | string;
    businessId?: Prisma.StringFilter<"Slot"> | string;
    inicio?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    fim?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    disponivel?: Prisma.BoolFilter<"Slot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    bookings?: Prisma.BookingListRelationFilter;
};
export type SlotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    inicio?: Prisma.SortOrder;
    fim?: Prisma.SortOrder;
    disponivel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    business?: Prisma.BusinessOrderByWithRelationInput;
    bookings?: Prisma.BookingOrderByRelationAggregateInput;
};
export type SlotWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SlotWhereInput | Prisma.SlotWhereInput[];
    OR?: Prisma.SlotWhereInput[];
    NOT?: Prisma.SlotWhereInput | Prisma.SlotWhereInput[];
    businessId?: Prisma.StringFilter<"Slot"> | string;
    inicio?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    fim?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    disponivel?: Prisma.BoolFilter<"Slot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    business?: Prisma.XOR<Prisma.BusinessScalarRelationFilter, Prisma.BusinessWhereInput>;
    bookings?: Prisma.BookingListRelationFilter;
}, "id">;
export type SlotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    inicio?: Prisma.SortOrder;
    fim?: Prisma.SortOrder;
    disponivel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SlotCountOrderByAggregateInput;
    _max?: Prisma.SlotMaxOrderByAggregateInput;
    _min?: Prisma.SlotMinOrderByAggregateInput;
};
export type SlotScalarWhereWithAggregatesInput = {
    AND?: Prisma.SlotScalarWhereWithAggregatesInput | Prisma.SlotScalarWhereWithAggregatesInput[];
    OR?: Prisma.SlotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SlotScalarWhereWithAggregatesInput | Prisma.SlotScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Slot"> | string;
    businessId?: Prisma.StringWithAggregatesFilter<"Slot"> | string;
    inicio?: Prisma.DateTimeWithAggregatesFilter<"Slot"> | Date | string;
    fim?: Prisma.DateTimeWithAggregatesFilter<"Slot"> | Date | string;
    disponivel?: Prisma.BoolWithAggregatesFilter<"Slot"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Slot"> | Date | string;
};
export type SlotCreateInput = {
    id?: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutSlotsInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutSlotInput;
};
export type SlotUncheckedCreateInput = {
    id?: string;
    businessId: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutSlotInput;
};
export type SlotUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutSlotsNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutSlotNestedInput;
};
export type SlotUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutSlotNestedInput;
};
export type SlotCreateManyInput = {
    id?: string;
    businessId: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
};
export type SlotUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SlotUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SlotListRelationFilter = {
    every?: Prisma.SlotWhereInput;
    some?: Prisma.SlotWhereInput;
    none?: Prisma.SlotWhereInput;
};
export type SlotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SlotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    inicio?: Prisma.SortOrder;
    fim?: Prisma.SortOrder;
    disponivel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SlotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    inicio?: Prisma.SortOrder;
    fim?: Prisma.SortOrder;
    disponivel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SlotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    businessId?: Prisma.SortOrder;
    inicio?: Prisma.SortOrder;
    fim?: Prisma.SortOrder;
    disponivel?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SlotScalarRelationFilter = {
    is?: Prisma.SlotWhereInput;
    isNot?: Prisma.SlotWhereInput;
};
export type SlotCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.SlotCreateWithoutBusinessInput, Prisma.SlotUncheckedCreateWithoutBusinessInput> | Prisma.SlotCreateWithoutBusinessInput[] | Prisma.SlotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.SlotCreateOrConnectWithoutBusinessInput | Prisma.SlotCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.SlotCreateManyBusinessInputEnvelope;
    connect?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
};
export type SlotUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: Prisma.XOR<Prisma.SlotCreateWithoutBusinessInput, Prisma.SlotUncheckedCreateWithoutBusinessInput> | Prisma.SlotCreateWithoutBusinessInput[] | Prisma.SlotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.SlotCreateOrConnectWithoutBusinessInput | Prisma.SlotCreateOrConnectWithoutBusinessInput[];
    createMany?: Prisma.SlotCreateManyBusinessInputEnvelope;
    connect?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
};
export type SlotUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.SlotCreateWithoutBusinessInput, Prisma.SlotUncheckedCreateWithoutBusinessInput> | Prisma.SlotCreateWithoutBusinessInput[] | Prisma.SlotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.SlotCreateOrConnectWithoutBusinessInput | Prisma.SlotCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.SlotUpsertWithWhereUniqueWithoutBusinessInput | Prisma.SlotUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.SlotCreateManyBusinessInputEnvelope;
    set?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    disconnect?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    delete?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    connect?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    update?: Prisma.SlotUpdateWithWhereUniqueWithoutBusinessInput | Prisma.SlotUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.SlotUpdateManyWithWhereWithoutBusinessInput | Prisma.SlotUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.SlotScalarWhereInput | Prisma.SlotScalarWhereInput[];
};
export type SlotUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: Prisma.XOR<Prisma.SlotCreateWithoutBusinessInput, Prisma.SlotUncheckedCreateWithoutBusinessInput> | Prisma.SlotCreateWithoutBusinessInput[] | Prisma.SlotUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: Prisma.SlotCreateOrConnectWithoutBusinessInput | Prisma.SlotCreateOrConnectWithoutBusinessInput[];
    upsert?: Prisma.SlotUpsertWithWhereUniqueWithoutBusinessInput | Prisma.SlotUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: Prisma.SlotCreateManyBusinessInputEnvelope;
    set?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    disconnect?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    delete?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    connect?: Prisma.SlotWhereUniqueInput | Prisma.SlotWhereUniqueInput[];
    update?: Prisma.SlotUpdateWithWhereUniqueWithoutBusinessInput | Prisma.SlotUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: Prisma.SlotUpdateManyWithWhereWithoutBusinessInput | Prisma.SlotUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: Prisma.SlotScalarWhereInput | Prisma.SlotScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type SlotCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.SlotCreateWithoutBookingsInput, Prisma.SlotUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.SlotCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.SlotWhereUniqueInput;
};
export type SlotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.SlotCreateWithoutBookingsInput, Prisma.SlotUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.SlotCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.SlotUpsertWithoutBookingsInput;
    connect?: Prisma.SlotWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SlotUpdateToOneWithWhereWithoutBookingsInput, Prisma.SlotUpdateWithoutBookingsInput>, Prisma.SlotUncheckedUpdateWithoutBookingsInput>;
};
export type SlotCreateWithoutBusinessInput = {
    id?: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
    bookings?: Prisma.BookingCreateNestedManyWithoutSlotInput;
};
export type SlotUncheckedCreateWithoutBusinessInput = {
    id?: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutSlotInput;
};
export type SlotCreateOrConnectWithoutBusinessInput = {
    where: Prisma.SlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.SlotCreateWithoutBusinessInput, Prisma.SlotUncheckedCreateWithoutBusinessInput>;
};
export type SlotCreateManyBusinessInputEnvelope = {
    data: Prisma.SlotCreateManyBusinessInput | Prisma.SlotCreateManyBusinessInput[];
    skipDuplicates?: boolean;
};
export type SlotUpsertWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.SlotWhereUniqueInput;
    update: Prisma.XOR<Prisma.SlotUpdateWithoutBusinessInput, Prisma.SlotUncheckedUpdateWithoutBusinessInput>;
    create: Prisma.XOR<Prisma.SlotCreateWithoutBusinessInput, Prisma.SlotUncheckedCreateWithoutBusinessInput>;
};
export type SlotUpdateWithWhereUniqueWithoutBusinessInput = {
    where: Prisma.SlotWhereUniqueInput;
    data: Prisma.XOR<Prisma.SlotUpdateWithoutBusinessInput, Prisma.SlotUncheckedUpdateWithoutBusinessInput>;
};
export type SlotUpdateManyWithWhereWithoutBusinessInput = {
    where: Prisma.SlotScalarWhereInput;
    data: Prisma.XOR<Prisma.SlotUpdateManyMutationInput, Prisma.SlotUncheckedUpdateManyWithoutBusinessInput>;
};
export type SlotScalarWhereInput = {
    AND?: Prisma.SlotScalarWhereInput | Prisma.SlotScalarWhereInput[];
    OR?: Prisma.SlotScalarWhereInput[];
    NOT?: Prisma.SlotScalarWhereInput | Prisma.SlotScalarWhereInput[];
    id?: Prisma.StringFilter<"Slot"> | string;
    businessId?: Prisma.StringFilter<"Slot"> | string;
    inicio?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    fim?: Prisma.DateTimeFilter<"Slot"> | Date | string;
    disponivel?: Prisma.BoolFilter<"Slot"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Slot"> | Date | string;
};
export type SlotCreateWithoutBookingsInput = {
    id?: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
    business: Prisma.BusinessCreateNestedOneWithoutSlotsInput;
};
export type SlotUncheckedCreateWithoutBookingsInput = {
    id?: string;
    businessId: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
};
export type SlotCreateOrConnectWithoutBookingsInput = {
    where: Prisma.SlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.SlotCreateWithoutBookingsInput, Prisma.SlotUncheckedCreateWithoutBookingsInput>;
};
export type SlotUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.SlotUpdateWithoutBookingsInput, Prisma.SlotUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.SlotCreateWithoutBookingsInput, Prisma.SlotUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.SlotWhereInput;
};
export type SlotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.SlotWhereInput;
    data: Prisma.XOR<Prisma.SlotUpdateWithoutBookingsInput, Prisma.SlotUncheckedUpdateWithoutBookingsInput>;
};
export type SlotUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    business?: Prisma.BusinessUpdateOneRequiredWithoutSlotsNestedInput;
};
export type SlotUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    businessId?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SlotCreateManyBusinessInput = {
    id?: string;
    inicio: Date | string;
    fim: Date | string;
    disponivel?: boolean;
    createdAt?: Date | string;
};
export type SlotUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUpdateManyWithoutSlotNestedInput;
};
export type SlotUncheckedUpdateWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutSlotNestedInput;
};
export type SlotUncheckedUpdateManyWithoutBusinessInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fim?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    disponivel?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SlotCountOutputType = {
    bookings: number;
};
export type SlotCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | SlotCountOutputTypeCountBookingsArgs;
};
export type SlotCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotCountOutputTypeSelect<ExtArgs> | null;
};
export type SlotCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
};
export type SlotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    inicio?: boolean;
    fim?: boolean;
    disponivel?: boolean;
    createdAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.Slot$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.SlotCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["slot"]>;
export type SlotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    inicio?: boolean;
    fim?: boolean;
    disponivel?: boolean;
    createdAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["slot"]>;
export type SlotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    businessId?: boolean;
    inicio?: boolean;
    fim?: boolean;
    disponivel?: boolean;
    createdAt?: boolean;
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["slot"]>;
export type SlotSelectScalar = {
    id?: boolean;
    businessId?: boolean;
    inicio?: boolean;
    fim?: boolean;
    disponivel?: boolean;
    createdAt?: boolean;
};
export type SlotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "businessId" | "inicio" | "fim" | "disponivel" | "createdAt", ExtArgs["result"]["slot"]>;
export type SlotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.Slot$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.SlotCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SlotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type SlotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    business?: boolean | Prisma.BusinessDefaultArgs<ExtArgs>;
};
export type $SlotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Slot";
    objects: {
        business: Prisma.$BusinessPayload<ExtArgs>;
        bookings: Prisma.$BookingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        businessId: string;
        inicio: Date;
        fim: Date;
        disponivel: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["slot"]>;
    composites: {};
};
export type SlotGetPayload<S extends boolean | null | undefined | SlotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SlotPayload, S>;
export type SlotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SlotCountAggregateInputType | true;
};
export interface SlotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Slot'];
        meta: {
            name: 'Slot';
        };
    };
    findUnique<T extends SlotFindUniqueArgs>(args: Prisma.SelectSubset<T, SlotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SlotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SlotFindFirstArgs>(args?: Prisma.SelectSubset<T, SlotFindFirstArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SlotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SlotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SlotFindManyArgs>(args?: Prisma.SelectSubset<T, SlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SlotCreateArgs>(args: Prisma.SelectSubset<T, SlotCreateArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SlotCreateManyArgs>(args?: Prisma.SelectSubset<T, SlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SlotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SlotDeleteArgs>(args: Prisma.SelectSubset<T, SlotDeleteArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SlotUpdateArgs>(args: Prisma.SelectSubset<T, SlotUpdateArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SlotDeleteManyArgs>(args?: Prisma.SelectSubset<T, SlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SlotUpdateManyArgs>(args: Prisma.SelectSubset<T, SlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SlotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SlotUpsertArgs>(args: Prisma.SelectSubset<T, SlotUpsertArgs<ExtArgs>>): Prisma.Prisma__SlotClient<runtime.Types.Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SlotCountArgs>(args?: Prisma.Subset<T, SlotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SlotCountAggregateOutputType> : number>;
    aggregate<T extends SlotAggregateArgs>(args: Prisma.Subset<T, SlotAggregateArgs>): Prisma.PrismaPromise<GetSlotAggregateType<T>>;
    groupBy<T extends SlotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SlotGroupByArgs['orderBy'];
    } : {
        orderBy?: SlotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SlotFieldRefs;
}
export interface Prisma__SlotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    business<T extends Prisma.BusinessDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BusinessDefaultArgs<ExtArgs>>): Prisma.Prisma__BusinessClient<runtime.Types.Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bookings<T extends Prisma.Slot$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Slot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SlotFieldRefs {
    readonly id: Prisma.FieldRef<"Slot", 'String'>;
    readonly businessId: Prisma.FieldRef<"Slot", 'String'>;
    readonly inicio: Prisma.FieldRef<"Slot", 'DateTime'>;
    readonly fim: Prisma.FieldRef<"Slot", 'DateTime'>;
    readonly disponivel: Prisma.FieldRef<"Slot", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Slot", 'DateTime'>;
}
export type SlotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
    where: Prisma.SlotWhereUniqueInput;
};
export type SlotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
    where: Prisma.SlotWhereUniqueInput;
};
export type SlotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SlotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SlotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SlotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SlotCreateInput, Prisma.SlotUncheckedCreateInput>;
};
export type SlotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SlotCreateManyInput | Prisma.SlotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SlotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    data: Prisma.SlotCreateManyInput | Prisma.SlotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SlotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SlotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SlotUpdateInput, Prisma.SlotUncheckedUpdateInput>;
    where: Prisma.SlotWhereUniqueInput;
};
export type SlotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SlotUpdateManyMutationInput, Prisma.SlotUncheckedUpdateManyInput>;
    where?: Prisma.SlotWhereInput;
    limit?: number;
};
export type SlotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SlotUpdateManyMutationInput, Prisma.SlotUncheckedUpdateManyInput>;
    where?: Prisma.SlotWhereInput;
    limit?: number;
    include?: Prisma.SlotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SlotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
    where: Prisma.SlotWhereUniqueInput;
    create: Prisma.XOR<Prisma.SlotCreateInput, Prisma.SlotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SlotUpdateInput, Prisma.SlotUncheckedUpdateInput>;
};
export type SlotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
    where: Prisma.SlotWhereUniqueInput;
};
export type SlotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SlotWhereInput;
    limit?: number;
};
export type Slot$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SlotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SlotSelect<ExtArgs> | null;
    omit?: Prisma.SlotOmit<ExtArgs> | null;
    include?: Prisma.SlotInclude<ExtArgs> | null;
};
