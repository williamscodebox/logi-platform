"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        credentials: true,
    });
    try {
        await app.listen(process.env.PORT ?? 3000);
        console.log(`🚀 Server running on port ${process.env.PORT ?? 3000}`);
    }
    catch (err) {
        console.error('❌ Failed to start server:', err);
    }
}
bootstrap().catch((err) => {
    console.error('Bootstrap failed:', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map