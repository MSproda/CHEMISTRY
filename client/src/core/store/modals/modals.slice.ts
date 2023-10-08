import { createSlice } from "@reduxjs/toolkit"

interface ModalsSlicesState {
    catalog: boolean
    notifications: boolean
    addresses: boolean
}

const initialState: ModalsSlicesState = {
    catalog: false,
    notifications: false,
    addresses: false
}

const ModalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setOpenCatalogModal(state) {
            state.catalog = true
        },
        setCloseCatalogModal(state) {
            state.catalog = false
        },
        setOpenNotificationsModal(state) {
            state.notifications = true
        },
        setCloseNotificationsModal(state) {
            state.notifications = false
        },
        setOpenAddressesModal(state) {
            state.addresses = true
        },
        setCloseAddressesModal(state) {
            state.addresses = false
        }
    }
})

export const {
    setOpenCatalogModal,
    setCloseCatalogModal,
    setOpenNotificationsModal,
    setCloseNotificationsModal,
    setCloseAddressesModal,
    setOpenAddressesModal
} = ModalsSlice.actions

export default ModalsSlice.reducer