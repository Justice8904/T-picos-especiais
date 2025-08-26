/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable()
export class CreateScenarioRepository {
    constructor(private readonly prisma:PrismaService) {}
    async create(data: CreateScenarioDto){
        const scenario = await this.prisma.scenario.create({
            data,
        });
        return scenario;
    }
}