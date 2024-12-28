"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { set } from "date-fns";

const page = () => {
  const [date, setDate] = useState(new Date());
  const [pitch1Bookings, setPitch1Bookings] = useState("");
  const [pitch2Bookings, setPitch2Bookings] = useState("");

  const timeSlots = (openingTime, closingTime) => {
    let obj = {};
    for (var i = openingTime; i < closingTime; i++) {
      if ((i > 0) & (i < 11)) {
        obj[`${i.toString()}am - ${(i + 1).toString()}am`] = false;
      } else if ((i > 12) & (i < 23)) {
        obj[`${(i - 12).toString()}pm - ${(i - 11).toString()}pm`] = false;
      } else if (i == 11) {
        obj[`${i.toString()}am - ${(i + 1).toString()}pm`] = false;
      } else if (i == 12) {
        obj[`${i.toString()}pm - ${(i - 11).toString()}pm`] = false;
      } else if (i == 23) {
        obj[`${(i - 12).toString()}pm - ${(i - 11).toString()}am`] = false;
      }
    }
    return obj;
  };

  const handleDateSelection = (selection) => {
    if (selection > new Date()) {
      setDate(selection);
    }
  };

  const handleSlotSelection = (selectedPitch, selectedSlot) => {
    if (selectedPitch == "1") {
      let clone1 = { ...pitch1Bookings };
      clone1[selectedSlot] == true
        ? (clone1[selectedSlot] = false)
        : (clone1[selectedSlot] = true);
      setPitch1Bookings(clone1);
    }
    if (selectedPitch == "2") {
      let clone2 = { ...pitch2Bookings };
      clone2[selectedSlot] == true
        ? (clone2[selectedSlot] = false)
        : (clone2[selectedSlot] = true);
      setPitch2Bookings(clone2);
    }
  };

  const handleSubmit = () => {
    console.log(pitch1Bookings);
    console.log(pitch2Bookings);
  };

  useEffect(() => {
    setPitch1Bookings(timeSlots(16, 24));
    setPitch2Bookings(timeSlots(16, 24));
  }, []);
  return (
    <main className="flex flex-col min-h-svh justify-center gap-12 p-12">
      <section className="container flex items-center mx-auto gap-12">
        <div className="flex-1 container ">
          <div className="flex flex-1 justify-center rounded-lg">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelection}
              className="rounded-md border w-fit"
            />
          </div>
        </div>
        <div className="flex-1 text-center justify-center rounded-lg p-12 border-[1px] border-gray-200 gap-10 flex flex-col ">
          <h1 className="font-semibold text-xl">Pitch 1</h1>
          <ul className="flex flex-col gap-4">
            {Object.keys(pitch1Bookings).map((timeSlot, index) => (
              <li
                key={index}
                className={`border-[1px] border-black rounded-xl py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 ${
                  pitch1Bookings[timeSlot] === true
                    ? "bg-gray-900 text-gray-100"
                    : ""
                }`}
                onClick={() => handleSlotSelection("1", timeSlot)}
              >
                {timeSlot}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 text-center border-[1px] border-gray-200 justify-center rounded-lg p-12 gap-10 flex flex-col">
          <h1 className="font-semibold text-xl">Pitch 2</h1>
          <ul className="flex flex-col gap-4">
            {Object.keys(pitch2Bookings).map((timeSlot, index) => (
              <li
                key={index}
                className={`border-[1px] border-black rounded-xl py-1 cursor-pointer hover:bg-gray-900 hover:text-gray-100 ${
                  pitch2Bookings[timeSlot] === true
                    ? "bg-gray-900 text-gray-100"
                    : ""
                }`}
                onClick={() => handleSlotSelection("2", timeSlot)}
              >
                {timeSlot}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Button
        className={"max-w-20 mx-auto"}
        variant="outline"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </main>
  );
};

export default page;
