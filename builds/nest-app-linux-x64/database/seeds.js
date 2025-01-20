"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nestjs_command_1 = require("nestjs-command");
const app_module_1 = require("../app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule, {
        logger: ['error', 'warn'],
    });
    try {
        await app.select(nestjs_command_1.CommandModule).get(nestjs_command_1.CommandService).exec();
    }
    catch (error) {
        console.error(error);
    }
    finally {
        await app.close();
    }
}
bootstrap();
//# sourceMappingURL=seeds.js.map