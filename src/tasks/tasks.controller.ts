import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { Task } from './shared/taks';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    return this.taskService.update(id, task);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.taskService.delete(id);
  }
}
