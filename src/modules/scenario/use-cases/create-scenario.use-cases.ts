/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { CreateScenarioRepository } from "../repository/create-scenario.repository";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable()
export class CreateScenarioUseCase {
    constructor(
        private readonly createScenarioRepository: CreateScenarioRepository,
        private readonly logger: Logger,
    ) {}
    async execute(data: CreateScenarioDto) {
        try {
            const scenario = this.createScenarioRepository.create(data)
            return scenario;
        } catch (error) {
            this.logger.error(error)
            throw error;
        }
    }
}