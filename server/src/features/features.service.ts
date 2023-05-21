import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {Feature, Prisma} from "@prisma/client";

@Injectable()
export class FeaturesService {
  constructor(private prisma: PrismaService) {
  }

  create(createFeatureDto: Prisma.FeatureCreateInput): Promise<Feature> {
    return this.prisma.feature.create({data: createFeatureDto});
  }

  findAll(): Promise<Feature[]> {
    return this.prisma.feature.findMany();
  }

  findOne(id: number): Promise<Feature> {
    return this.prisma.feature.findUnique({where: {id}});
  }

  update(id: number, updateFeatureDto: Prisma.FeatureUpdateInput): Promise<Feature> {
    return this.prisma.feature.update({
      where: {id},
      data: updateFeatureDto,
    });
  }

  remove(id: number) {
    return this.prisma.feature.delete({where: {id}});
  }
}
