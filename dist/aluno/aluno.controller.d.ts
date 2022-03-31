import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunoController {
    private readonly alunoService;
    constructor(alunoService: AlunoService);
    create(createAlunoDto: CreateAlunoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAlunoDto: UpdateAlunoDto): string;
    remove(id: string): string;
}
