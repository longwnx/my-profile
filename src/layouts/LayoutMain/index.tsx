"use client";

import classNames from "classnames";
import { css } from "@emotion/css";
import { Header } from "@/components";
import { useDevice } from "@/hooks";
import React from "react";

type Props = {
  children?: React.ReactNode;
  isVisibleFooter?: boolean;
  isLoadingOnSave?: boolean;
  disabledSave?: boolean;
  onSave?: () => void;
};

export const LayoutMain: React.FC<Props> = ({
  children,
  isVisibleFooter,
  onSave,
  disabledSave,
}) => {
  const { isMobile } = useDevice();

  // const onDiscard = useCallback(() => {
  //     window.location.reload()
  // }, [])
  //
  // const detectKeyDown = useCallback(
  //     (e: KeyboardEvent) => {
  //         if ((e.metaKey || e.ctrlKey) && e.key === 's') {
  //             e.preventDefault()
  //             if (!disabledSave && onSave) {
  //                 onSave()
  //             }
  //         }
  //     },
  //     [disabledSave, onSave]
  // )

  // useEffect(() => {
  //     window.addEventListener('keydown', detectKeyDown)
  //
  //     return () => {
  //         window.removeEventListener('keydown', detectKeyDown)
  //     }
  // }, [detectKeyDown])

  const classNameFooter = css({
    transform: isMobile ? "unset" : `translateY(${isVisibleFooter ? 0 : 48}px)`,
    transitionDuration: "0.1s",
  });

  return (
    <div className="h-screen flex-col relative pt-[64px] overflow-hidden">
      <div className="h-[64px] absolute top-0 right-0 w-full">
        <Header />
      </div>
      <div className="h-[calc(100vh-64px)] overflow-y-auto">{children}</div>
      <div
        className={classNames(
          "h-[48px] border-t border-gray100 md:absolute w-full bottom-0 right-0 z-50",
          classNameFooter,
        )}
      >
        {/*<Footer onDiscard={onDiscard} onSave={onSave} isLoading={isLoadingOnSave}*/}
        {/*        disabledSave={disabledSave}/>*/}
      </div>
    </div>
  );
};
