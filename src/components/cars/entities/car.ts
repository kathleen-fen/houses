import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "cars"})
@ObjectType()
export class Car {
    @PrimaryGeneratedColumn("uuid")
    @Field()
    id: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    daylyPrice: number;

    @Column()
    @Field()
    monthlyPrice: number;

    @Column()
    @Field()
    milage: string;

    @Column()
    @Field()
    gas: string;

    @Column()
    @Field()
    gearType: string;

    @Column()
    @Field()
    thumbnailUrl: string;
}