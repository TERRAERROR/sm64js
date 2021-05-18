import { MOV_TEX_INIT_LOAD, MOV_TEX_ROT_SPEED, MOV_TEX_ROT_SCALE, MOV_TEX_4_BOX_TRIS, MOV_TEX_ROT, ROTATE_COUNTER_CLOCKWISE, MOV_TEX_ALPHA, MOV_TEX_DEFINE, TEXTURE_WATER, ROTATE_CLOCKWISE, MOV_TEX_END, MOV_TEX_SPD, MOV_TEX_TRIS } from "../../../../include/moving_texture_macros"

const dolphin_water_data = [
    ...MOV_TEX_INIT_LOAD(1),
    ...MOV_TEX_ROT_SPEED(12),
    ...MOV_TEX_ROT_SCALE(25),
    ...MOV_TEX_4_BOX_TRIS(-11555, -26048),
    ...MOV_TEX_4_BOX_TRIS(-11555, 2752),
    ...MOV_TEX_4_BOX_TRIS(6408, 2752),
    ...MOV_TEX_4_BOX_TRIS(6408, -26048),
    ...MOV_TEX_ROT(ROTATE_CLOCKWISE),
    ...MOV_TEX_ALPHA(0x96),
    ...MOV_TEX_DEFINE(TEXTURE_WATER),
    ...MOV_TEX_END(),
]

export const dolphin_movtex_water = [
    { id: 0, movtex: dolphin_water_data },
    { id: -1 }
]