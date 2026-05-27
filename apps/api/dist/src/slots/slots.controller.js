"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../auth/decorators/public.decorator");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const generate_slots_dto_1 = require("./dto/generate-slots.dto");
const list_slots_query_dto_1 = require("./dto/list-slots.query.dto");
const slots_service_1 = require("./slots.service");
let SlotsController = class SlotsController {
    slots;
    constructor(slots) {
        this.slots = slots;
    }
    findAll(query) {
        return this.slots.findAll(query);
    }
    generate(dto) {
        return this.slots.generate(dto);
    }
};
exports.SlotsController = SlotsController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_slots_query_dto_1.ListSlotsQueryDto]),
    __metadata("design:returntype", void 0)
], SlotsController.prototype, "findAll", null);
__decorate([
    (0, roles_decorator_1.Roles)('DONO'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [generate_slots_dto_1.GenerateSlotsDto]),
    __metadata("design:returntype", void 0)
], SlotsController.prototype, "generate", null);
exports.SlotsController = SlotsController = __decorate([
    (0, common_1.Controller)('slots'),
    __metadata("design:paramtypes", [slots_service_1.SlotsService])
], SlotsController);
//# sourceMappingURL=slots.controller.js.map