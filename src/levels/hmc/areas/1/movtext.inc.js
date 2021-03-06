import {
    MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT,
    MOV_TEX_ALPHA, MOV_TEX_DEFINE, MOV_TEX_END, MOV_TEX_SPD, MOV_TEX_TRIS,
    ROTATE_COUNTER_CLOCKWISE, TEXTURE_WATER, ROTATE_CLOCKWISE
} from "../../../../include/moving_texture_macros"

const hmc_movtex_dorrie_pool_water_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(20),
    ...MOV_TEX_ROT_SCALE(12),
    ...MOV_TEX_4_BOX_TRIS(-7628, -2559),
    ...MOV_TEX_4_BOX_TRIS(-7628,  7654),
    ...MOV_TEX_4_BOX_TRIS(563,  7654),
    ...MOV_TEX_4_BOX_TRIS(563, -2559),
    ...MOV_TEX_ROT(ROTATE_COUNTER_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x96),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]

export const hmc_movtex_dorrie_pool_water = [
    { id: 0, movtex: hmc_movtex_dorrie_pool_water_data },
    { id: -1, movtex: null },
]

/*const hmc_movtex_toxic_maze_rot_count_clock_mist_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(15),
    ...MOV_TEX_ROT_SCALE(3),
    ...MOV_TEX_4_BOX_TRIS(1690, -6348),
    ...MOV_TEX_4_BOX_TRIS(1690,   819),
    ...MOV_TEX_4_BOX_TRIS(6298,   819),
    ...MOV_TEX_4_BOX_TRIS(6298, -6348),
    ...MOV_TEX_ROT(ROTATE_COUNTER_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x78),
    ...MOV_TEX_DEFINE(TEXTURE_MIST),
    ...MOV_TEX_END(),
]

const hmc_movtex_toxic_maze_rot_clock_mist_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(8),
    ...MOV_TEX_ROT_SCALE(3),
    ...MOV_TEX_4_BOX_TRIS(1690, -6348),
    ...MOV_TEX_4_BOX_TRIS(1690,   819),
    ...MOV_TEX_4_BOX_TRIS(6298,   819),
    ...MOV_TEX_4_BOX_TRIS(6298, -6348),
    ...MOV_TEX_ROT(ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(0xB4),
    ...MOV_TEX_DEFINE(TEXTURE_MIST),
    ...MOV_TEX_END(),
]

export const hmc_movtex_toxic_maze_mist = [
    ...{ id: 50, movtex: hmc_movtex_toxic_maze_rot_count_clock_mist_data },
    ...{ id: 51, movtex: hmc_movtex_toxic_maze_rot_clock_mist_data },
    ...{ id: -1, movtex: null },
]*/