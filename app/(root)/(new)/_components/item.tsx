"use client";
// import { cn } from "@/lib/utils";
import {cn} from "../../../../lib/utils"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ItemProps {
	label: string;
	onClick: () => void;
	icon: any;
}

const Item = ({ label, onClick, icon: Icon }: ItemProps) => {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState<boolean>(false);
	useEffect(() => {
		if (label === "All Articles" && pathname === "/") {
		  setIsActive(true);
		} else if (label && pathname === "/articles/" + label.toLocaleLowerCase()) {
		  setIsActive(true);
		} else {
		  setIsActive(false);
		}
	  }, [label, pathname]);
	return (
		<div
			onClick={onClick}
			role="button"
			className={cn(
				"relative flex min-h-[50px] w-full items-center rounded-lg px-0 py-1 font-bold hover:first:bg-slate-950",
				isActive && "bg-blue-50 text-blue-500",
			)}
			style={{
				paddingLeft: "10px",
				backgroundColor: isActive ? "#F3F8FF" : "transparent",
			}}
		>
			<Icon className="mr-2 h-[18px] shrink-0" />
			<span className="truncate">{label}</span>
			{isActive && (
				<span
					className={cn(
						"absolute bottom-3 left-0 top-3 w-1 rounded-r bg-blue-500",
					)}
				></span>
			)}
		</div>
	);
};

export default Item;
