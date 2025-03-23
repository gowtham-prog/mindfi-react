import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

const mockTimeSlots = [
    { id: 1, time: "10:00 AM - 10:30 AM", booked: false },
    { id: 2, time: "11:00 AM - 11:30 AM", booked: false },
    { id: 3, time: "12:00 PM - 12:30 PM", booked: false },
    { id: 4, time: "02:00 PM - 02:30 PM", booked: false },
    { id: 5, time: "03:30 PM - 04:00 PM", booked: false },
];

export default function BookSlot({onClose}) {
    const [slots, setSlots] = useState(mockTimeSlots);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotClick = (id) => {
        setSelectedSlot(id);
    };

    const handleBookSlot = () => {
        if (!selectedSlot) return;

        setSlots((prevSlots) =>
            prevSlots.map((slot) =>
                slot.id === selectedSlot ? { ...slot, booked: true } : slot
            )
        );
        setSelectedSlot(null);
        toast.success("Slot Booked Successfully");
        // alert("Slot booked successfully!");
    };

    return (
        <div className="max-w-lg relative mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Book a Time Slot</h2>

            <div className="grid grid-cols-2 gap-4">
                {slots.map((slot) => (
                    <motion.button
                        key={slot.id}
                        onClick={() => handleSlotClick(slot.id)}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-lg text-center font-medium border-2 transition ${slot.booked
                                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                : selectedSlot === slot.id
                                    ? "bg-purple-500 text-white border-purple-700"
                                    : "bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-purple-100 dark:hover:bg-purple-700"
                            }`}
                        disabled={slot.booked}
                    >
                        {slot.time}
                    </motion.button>
                ))}
            </div>

            <button
                onClick={handleBookSlot}
                disabled={!selectedSlot}
                className="mt-6 w-full px-4 bg-gradient-to-r from-purple-500 to-purple-600 shadow-sm text-white rounded-lg py-2 hover:bg-purple-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Book Slot
            </button>
            <div onClick={() =>onClose()} className="absolute top-0 right-0 cursor-pointer w-6 h-6 rounded-full bg-opacity-75 transition-opacity">
                <X className="w-6 h-6" />
            </div>
        </div>
    );
}
