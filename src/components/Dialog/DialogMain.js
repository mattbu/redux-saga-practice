import React, { Children, isValidElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from '../../scss/components/Dialog.module.scss'

const DialogLabelButtonType = (<DialogLabelButton />).type

function getDialogLabelButtons(children) {
  const childrenArray = Children.toArray(children)
  console.log(childrenArray);
  return childrenArray
    .filter(
      child => isValidElement(child) && child.type === DialogLabelButtonType,
    )
    .slice(0, 2);
}

function DialogTitle({ children, className }) {
  return <h1 className={className}>{children}</h1>
}

function DialogLabelButton({ children, className, onClick }) {
  return <button className={className} onClick={onClick}>{children}</button>
}

function DialogBody({ children, className }) {
  return <div className={className}>{children}</div>
}

function DialogDimmed({ children, className, onClick }) {
  return <div className={className} onClick={onClick}>{children}</div>
}

function DialogMain({ children, isOpen, className }) {
  if (!isOpen) {
    return null;
  }

  // const dialogLabelButtons = getDialogLabelButtons(children);

  return createPortal(
    <div className={className}>
      {children}
    </div>
    , document.body)
}

export const Dialog = Object.assign(DialogMain, {
  Dimmed: DialogDimmed,
  Title: DialogTitle,
  Body: DialogBody,
  LabelButton: DialogLabelButton
});