import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    Criar(): string;
    Atualizar(): string;
    Delete(): string;
}
