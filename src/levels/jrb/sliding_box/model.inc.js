// 0x07007EA0 - 0x07007EB8

import {
    gdSPDefLights1, gsDPSetTextureImage, gsDPLoadSync, gsDPLoadBlock, gsSPLight, gsSPVertex,
    gsSP2Triangles, gsSPEndDisplayList, gsDPPipeSync, gsDPSetCycleType, gsDPSetRenderMode,
    gsDPSetDepthSource, gsDPSetFogColor, gsSPFogPosition, gsSPSetGeometryMode, gsDPSetCombineMode,
    gsDPSetTile, gsSPTexture, gsDPTileSync, gsDPSetTileSize, gsSPDisplayList,
    gsSPClearGeometryMode,
    G_IM_FMT_RGBA, G_IM_SIZ_16b, CALC_DXT, G_TX_LOADTILE, G_IM_SIZ_16b_BYTES, G_CYC_2CYCLE,
    G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2, G_ZS_PIXEL, G_FOG, G_CC_MODULATERGB, G_CC_PASS2,
    G_TX_WRAP, G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_RENDERTILE, G_ON, G_TX_CLAMP,
    G_TEXTURE_IMAGE_FRAC, G_OFF, G_CYC_1CYCLE, G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2, G_CC_SHADE
} from "../../../include/gbi"
import {
    jrb_seg7_texture_07001800, jrb_seg7_texture_07002000
} from "../texture.inc"

const jrb_seg7_lights_07007EA0 = gdSPDefLights1(
    0x7f, 0x7f, 0x7f,
    0xff, 0xff, 0xff, 0x28, 0x28, 0x28
);

// 0x07007EB8 - 0x07007FB8
const jrb_seg7_vertex_07007EB8 = [
    [[   102,      0,     77], 0, [   990,    990], [0x33, 0xcd, 0x67, 0xff]],
    [[   102,    154,     77], 0, [   990,      0], [0x54, 0x54, 0x2a, 0xff]],
    [[  -101,    154,     77], 0, [     0,      0], [0xcd, 0x33, 0x67, 0xff]],
    [[   102,      0,    -76], 0, [   990,    990], [0x54, 0xac, 0xd6, 0xff]],
    [[   102,    154,     77], 0, [     0,      0], [0x54, 0x54, 0x2a, 0xff]],
    [[   102,      0,     77], 0, [     0,    990], [0x33, 0xcd, 0x67, 0xff]],
    [[   102,    154,    -76], 0, [   990,      0], [0x33, 0x33, 0x99, 0xff]],
    [[  -101,      0,    -76], 0, [   990,    990], [0xcd, 0xcd, 0x99, 0xff]],
    [[   102,    154,    -76], 0, [     0,      0], [0x33, 0x33, 0x99, 0xff]],
    [[   102,      0,    -76], 0, [     0,    990], [0x54, 0xac, 0xd6, 0xff]],
    [[  -101,    154,    -76], 0, [   990,      0], [0xac, 0x54, 0xd6, 0xff]],
    [[  -101,      0,     77], 0, [   990,    990], [0xac, 0xac, 0x2a, 0xff]],
    [[  -101,    154,     77], 0, [   990,      0], [0xcd, 0x33, 0x67, 0xff]],
    [[  -101,    154,    -76], 0, [     0,      0], [0xac, 0x54, 0xd6, 0xff]],
    [[  -101,      0,    -76], 0, [     0,    990], [0xcd, 0xcd, 0x99, 0xff]],
    [[  -101,      0,     77], 0, [     0,    990], [0xac, 0xac, 0x2a, 0xff]],
];

// 0x07007FB8 - 0x07008038
const jrb_seg7_vertex_07007FB8 = [
    [[  -101,      0,     77], 0, [     0,      0], [0xac, 0xac, 0x2a, 0xff]],
    [[   102,      0,    -76], 0, [   990,    990], [0x54, 0xac, 0xd6, 0xff]],
    [[   102,      0,     77], 0, [   990,      0], [0x33, 0xcd, 0x67, 0xff]],
    [[  -101,      0,    -76], 0, [     0,    990], [0xcd, 0xcd, 0x99, 0xff]],
    [[   102,    154,     77], 0, [   990,    990], [0x54, 0x54, 0x2a, 0xff]],
    [[   102,    154,    -76], 0, [   990,      0], [0x33, 0x33, 0x99, 0xff]],
    [[  -101,    154,    -76], 0, [     0,      0], [0xac, 0x54, 0xd6, 0xff]],
    [[  -101,    154,     77], 0, [     0,    990], [0xcd, 0x33, 0x67, 0xff]],
];

// 0x07008038 - 0x070080B0
const jrb_seg7_dl_07008038 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, jrb_seg7_texture_07001800),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPLight(jrb_seg7_lights_07007EA0.l, 1),
    gsSPLight(jrb_seg7_lights_07007EA0.a, 2),
    gsSPVertex(jrb_seg7_vertex_07007EB8, 16, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
    gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
    gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
    gsSP2Triangles(11, 13, 14, 0x0,  0,  2, 15, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070080B0 - 0x070080F8
const jrb_seg7_dl_070080B0 = [
    gsDPSetTextureImage(G_IM_FMT_RGBA, G_IM_SIZ_16b, 1, jrb_seg7_texture_07002000),
    gsDPLoadSync(),
    gsDPLoadBlock(G_TX_LOADTILE, 0, 0, 32 * 32 - 1, CALC_DXT(32, G_IM_SIZ_16b_BYTES)),
    gsSPVertex(jrb_seg7_vertex_07007FB8, 8, 0),
    gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
    gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
    gsSPEndDisplayList(),
].flat();

// 0x070080F8 - 0x070081A8
export const jrb_seg7_dl_070080F8 = [
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_2CYCLE),
    gsDPSetRenderMode(G_RM_FOG_SHADE_A, G_RM_AA_ZB_OPA_SURF2),
    gsDPSetDepthSource(G_ZS_PIXEL),
    gsDPSetFogColor(5, 80, 75, 255),
    gsSPFogPosition(900, 1000),
    gsSPSetGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_MODULATERGB, G_CC_PASS2),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 0, 0, G_TX_LOADTILE, 0, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD, G_TX_WRAP | G_TX_NOMIRROR, G_TX_NOMASK, G_TX_NOLOD),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_ON),
    gsDPTileSync(),
    gsDPSetTile(G_IM_FMT_RGBA, G_IM_SIZ_16b, 8, 0, G_TX_RENDERTILE, 0, G_TX_CLAMP, 5, G_TX_NOLOD, G_TX_CLAMP, 5, G_TX_NOLOD),
    gsDPSetTileSize(0, 0, 0, (32 - 1) << G_TEXTURE_IMAGE_FRAC, (32 - 1) << G_TEXTURE_IMAGE_FRAC),
    gsSPDisplayList(jrb_seg7_dl_07008038),
    gsSPDisplayList(jrb_seg7_dl_070080B0),
    gsSPTexture(0xFFFF, 0xFFFF, 0, G_TX_RENDERTILE, G_OFF),
    gsDPPipeSync(),
    gsDPSetCycleType(G_CYC_1CYCLE),
    gsDPSetRenderMode(G_RM_AA_ZB_OPA_SURF, G_RM_NOOP2),
    gsSPClearGeometryMode(G_FOG),
    gsDPSetCombineMode(G_CC_SHADE, G_CC_SHADE),
    gsSPEndDisplayList(),
].flat();

// 2021-05-30 17:31:18 -0400 (Convert.rb 2021-05-29 17:49:14 -0400)
