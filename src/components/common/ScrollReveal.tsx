"use client";

import React from "react";
import { motion, type HTMLMotionProps, type Variants } from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number | "some" | "all";
  once?: boolean;
}

const customEase = [0.16, 1, 0.3, 1] as const;
const springEase = [0.34, 1.25, 0.64, 1] as const;

export function FadeUp({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
  amount = 0.15,
  once = true,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ duration, ease: customEase, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeDown({
  children,
  delay = 0,
  duration = 0.65,
  className = "",
  amount = 0.15,
  once = true,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ duration, ease: customEase, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  amount = 0.15,
  once = true,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ duration, ease: customEase, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  amount = 0.15,
  once = true,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ duration, ease: customEase, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function PopUp({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  amount = 0.15,
  once = true,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      transition={{ duration, ease: springEase, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (staggerDelay = 0.08) => ({
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.05,
    },
  }),
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  amount?: number | "some" | "all";
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = "",
  amount = 0.15,
  once = true,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      custom={staggerDelay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
