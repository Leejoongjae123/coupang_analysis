"use client";

import React from "react";
import {Input, Select, SelectItem} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import CardReview from "./components/card-review";
import reviews from "./components/reviews";

export default function Component() {
  return (
    <section className="w-full h-full px-2 md:px-6 lg:px-8 py-8 overflow-x-auto">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap md:px-2">

        <div className="flex w-full items-center justify-end gap-4">
          <Input
            fullWidth
            aria-label="Search"
            className="w-72"
            labelPlacement="outside"
            placeholder="Search reviews"
            startContent={<Icon icon="solar:magnifer-linear" />}
          />

          <Select
            aria-label="Sort by"
            className="w-40"
            defaultSelectedKeys={["most_recent"]}
            labelPlacement="outside"
          >
            <SelectItem key="most_recent" value="most_recent">
              Most recent
            </SelectItem>
            <SelectItem key="most_helpful" value="most_helpful">
              Most helpful
            </SelectItem>
            <SelectItem key="highest_rating" value="highest_rating">
              Highest rating
            </SelectItem>
          </Select>
        </div>
      </header>
      <div className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <CardReview key={index} {...review} />
        ))}
      </div>
    </section>
  );
}
