import { Field, InputType, Int } from "@nestjs/graphql";
import { Max, Min } from "class-validator";
import { type } from "os";

@InputType()
export class NewCarInput {

    @Field()
    name: string;

    @Field(type => Int)
    @Min(100, {message: "too low!"})
    @Max(1000)
    daylyPrice: number;
    

    @Field(type => Int)
    monthlyPrice: number;

    @Field()
    milage: string;

    @Field()
    gas: string;

    @Field()
    gearType: string;

    @Field()
    thumbnailUrl: string;
}