import { describe, expect, test } from "vitest";
import Button, { sum } from "./Button";
import { render ,screen  } from "@testing-library/react";

describe ("sum" ,()=> {
    test ("returns 3 ",()=> {
        expect (sum()) .toBe(3)
    })
})
describe ("Button" ,()=> {
    test ("renders ",()=> {
        render ( < Button/>

        );
        expect (screen.getByRole("heading")) .toBeInTheDocument()
    })
})

