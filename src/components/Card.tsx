"use client";
import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";

import { Rating } from "@mui/material";
import { useState } from "react";

interface props {
  venueName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (rating: number) => void;
}
export default function Card(props: props) {
  return (
    <InteractiveCard>
      <div className={styles.card}>
        <img src={props.imgSrc} alt={props.venueName} />
        <div className={styles.text}>
          <h2>{props.venueName}</h2>
        </div>
        <Rating
          id={`${props.venueName} Rating`}
          name={`${props.venueName} Rating`}
          data-testid={`${props.venueName} Rating`}
          value={props.rating}
          onChange={(_, newRating) => props.onRatingChange(newRating ?? 0)}
        />
      </div>
    </InteractiveCard>
  );
}
