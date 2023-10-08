import { TypedUseSelectorHook, useSelector } from "react-redux"

import { TypeRootState } from "@/core/store/store"

export const useTypedSelector:
    TypedUseSelectorHook<TypeRootState> = useSelector