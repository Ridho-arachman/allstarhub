import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useState } from "react";

const RatingComponent = ({
  stars,
  editable = false,
  initialRating = 0,
}: {
  stars?: number[];
  editable?: boolean;
  initialRating?: number;
}) => {
  const [rating, setRating] = useState(initialRating);
  const handleRating = (index: number) => {
    if (!editable) return;
    setRating(index);
  };

  return (
    <div className="flex space-x-1">
      {stars?.map((index) => (
        <Star
          key={index}
          onClick={editable ? () => handleRating(index) : undefined}
          className={cn(
            "h-8 w-8 transition-colors duration-300",
            editable ? "cursor-pointer" : "cursor-default",
          )}
          fill={index <= rating ? "yellow" : "none"} // Mengisi bintang penuh
          stroke={index <= rating ? "yellow" : "gray"} // Mengubah warna border
        />
      ))}
    </div>
  );
};

export default RatingComponent;
