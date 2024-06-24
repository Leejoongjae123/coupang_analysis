"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Avatar,
  Badge,
  Input,
  Autocomplete,
  AutocompleteItem,
  CardFooter,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import countries from "./components/countries";

export default function Component(props) {
  return (
    <Card className="p-5 h-full shadow-none">
      <CardHeader className="flex flex-col items-start px-4 pb-0 pt-4 shadow-none mb-5 font-bold">
        <p className="text-large">Account Details</p>
        {/* <div className="flex gap-4 py-4">
          <div className="flex flex-col items-start justify-center">
            <p className="font-medium">Tony Reichert</p>
            <span className="text-small text-default-500">Professional Designer</span>
          </div>
        </div>
        <p className="text-small text-default-400">
          The photo will be used for your profile, and will be visible to other users of the
          platform.
        </p> */}
      </CardHeader>
      <CardBody className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Username */}
        <Input label="Username" labelPlacement="outside" placeholder="Enter username" />
        {/* Email */}
        <Input label="Email" labelPlacement="outside" placeholder="Enter email" />
        {/* First Name */}
        <Input label="First Name" labelPlacement="outside" placeholder="Enter first name" />
        {/* Last Name */}
        <Input label="Last Name" labelPlacement="outside" placeholder="Enter last name" />
        {/* Phone Number */}
        <Input label="Phone Number" labelPlacement="outside" placeholder="Enter phone number" />
        {/* Country */}
        <Autocomplete
          defaultItems={countries}
          label="Country"
          labelPlacement="outside"
          placeholder="Select country"
          showScrollIndicators={false}
        >
          {(item) => (
            <AutocompleteItem
              key={item.code}
              startContent={
                <Avatar
                  alt="Country Flag"
                  className="h-6 w-6"
                  src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                />
              }
              value={item.code}
            >
              {item.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
        {/* State */}
        <Input label="State" labelPlacement="outside" placeholder="Enter state" />
        {/* Address */}
        <Input label="Address" labelPlacement="outside" placeholder="Enter address" />
        {/* Zip Code */}
        <Input label="Zip Code" labelPlacement="outside" placeholder="Enter zip code" />
      </CardBody>

      <CardFooter className="mt-4 justify-end gap-2">
        <Button radius="full" variant="bordered">
          Cancel
        </Button>
        <Button color="primary" radius="full">
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
