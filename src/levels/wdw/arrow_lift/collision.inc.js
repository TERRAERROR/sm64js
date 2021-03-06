// Wdw

import {
    COL_INIT, COL_VERTEX_INIT, COL_VERTEX, COL_TRI_INIT, COL_TRI, COL_TRI_STOP, COL_END,
    SURFACE_DEFAULT
} from "../../../include/surface_terrains"

// 0x07018444 - 0x070184C8
export const wdw_seg7_collision_arrow_lift = [
    COL_INIT(),
    COL_VERTEX_INIT(0x8),
    COL_VERTEX(63, 127, -60),
    COL_VERTEX(-64, 127, 67),
    COL_VERTEX(63, 127, 67),
    COL_VERTEX(63, 0, 67),
    COL_VERTEX(63, 0, -60),
    COL_VERTEX(-64, 0, 67),
    COL_VERTEX(-64, 0, -60),
    COL_VERTEX(-64, 127, -60),
    COL_TRI_INIT(SURFACE_DEFAULT, 12),
    COL_TRI(0, 1, 2),
    COL_TRI(2, 3, 4),
    COL_TRI(2, 4, 0),
    COL_TRI(1, 3, 2),
    COL_TRI(3, 5, 6),
    COL_TRI(3, 6, 4),
    COL_TRI(1, 5, 3),
    COL_TRI(0, 4, 6),
    COL_TRI(0, 6, 7),
    COL_TRI(0, 7, 1),
    COL_TRI(7, 5, 1),
    COL_TRI(7, 6, 5),
    COL_TRI_STOP(),
    COL_END(),
].flat();

// 1620705666 - 2021-05-13 00:28:59 -0400
