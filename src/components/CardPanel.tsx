"use client";
// src/components/CardPanel.tsx
import styles from "@/app/page.module.css";
import Card from "./Card";
import { useReducer } from "react";
import { stat } from "fs";
const venues = [
  { imgSrc: "/images/bloom.jpg", venueName: "The Bloom Pavilion" },
  { imgSrc: "/images/sparkspace.jpg", venueName: "Spark Space" },
  { imgSrc: "/images/grandtable.jpg", venueName: "The Grand Table" },
];

type RatingMap = Map<string, number>;

type Action =
  | { type: "SET_RATING"; venueName: string; rating: number }
  | { type: "REMOVE_RATING"; venueName: string };
function RatingReducer(state: RatingMap, action: Action): RatingMap {
  switch (action.type) {
    case "SET_RATING":
      const updateRate = new Map(state);
      updateRate.set(action.venueName, action.rating);
      return updateRate;

    case "REMOVE_RATING": {
      const updatedRatings = new Map(state);
      updatedRatings.delete(action.venueName);
      return updatedRatings;
    }

    default:
      return state;
  }
}
const initialRatings = new Map<string, number>([
  ["The Bloom Pavilion", 0],
  ["Spark Space", 0],
  ["The Grand Table", 0],
]);

export default function CardPanel() {
  const [rating, dispatch] = useReducer(RatingReducer, initialRatings);

  return (
    <div>
      <div className={styles.cardsGrid}>
        {venues.map((venue) => (
          <Card
            key={venue.venueName}
            venueName={venue.venueName}
            imgSrc={venue.imgSrc}
            rating={rating.get(venue.venueName) ?? 0}
            onRatingChange={(newRating) =>
              dispatch({
                type: "SET_RATING",
                venueName: venue.venueName,
                rating: newRating,
              })
            }
          />
        ))}
      </div>

      <div className="absolute bottom-5 left-5 rounded bg-white p-3 shadow">
        <div className="w-full text-xl font-medium">
          Venue list with rating: {rating.size}
        </div>

        {Array.from(rating.entries()).map(([venueName, rating]) => (
          <div key={venueName} data-testid={venueName} onClick={() => dispatch({type:"REMOVE_RATING" ,venueName} )}>
            {venueName}: {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
