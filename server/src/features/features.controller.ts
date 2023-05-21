import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";
import {Prisma} from "@prisma/client";
import {FeaturesService} from './features.service';
import {PrismaModel} from "../_gen/prisma-class";
import Feature = PrismaModel.Feature;

@ApiTags('Feature')
@Controller('/api/v1/features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {
  }

  @Post()
  @ApiOperation({summary: 'Create new feature'})
  @ApiBody({type: Feature})
  create(@Body() createFeatureDto: Prisma.FeatureCreateInput) {
    return this.featuresService.create(createFeatureDto);
  }

  @Get()
  @ApiOperation({summary: 'Get all features'})
  findAll() {
    return this.featuresService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Get a feature'})
  findOne(@Param('id') id: string) {
    return this.featuresService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Update a feature'})
  update(@Param('id') id: string, @Body() updateFeatureDto: Prisma.FeatureUpdateInput) {
    return this.featuresService.update(+id, updateFeatureDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete a feature'})
  remove(@Param('id') id: string) {
    return this.featuresService.remove(+id);
  }
}
