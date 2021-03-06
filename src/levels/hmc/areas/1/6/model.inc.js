import * as Gbi from "../../../../../include/gbi"
import {
	cave_09001000,
	cave_09003000
} from "../../../../../textures/cave"
const hmc_seg7_vertex_0700E5B0 = [
	{ pos: [ 6244, 154, 2560 ], flag: 0, tc: [ 4056, -3098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5579, 154, 2560 ], flag: 0, tc: [ -2586, -3098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5579, 256, 2458 ], flag: 0, tc: [ -2586, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 901, 2048, 3564 ], flag: 0, tc: [ 0, 10186 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 901, 3072, 3564 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 901, 3072, 4076 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 901, 2048, 4076 ], flag: 0, tc: [ 5078, 10186 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 901, 2048, 4076 ], flag: 0, tc: [ 3034, 6098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 901, 3072, 4076 ], flag: 0, tc: [ 3034, -4120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 3072, 4076 ], flag: 0, tc: [ -1870, -4120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 2048, 4076 ], flag: 0, tc: [ -1870, 6098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6244, 922, 2560 ], flag: 0, tc: [ 4056, 4564 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5579, 922, 2560 ], flag: 0, tc: [ -2584, 4564 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2578, 1434, 1346 ], flag: 0, tc: [ 5590, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2899, 1434, 1506 ], flag: 0, tc: [ 2012, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1434, 1048 ], flag: 0, tc: [ 2012, -1054 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700E6B0 = [
	{ pos: [ 6244, 154, 2560 ], flag: 0, tc: [ 4056, -3098 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5579, 256, 2458 ], flag: 0, tc: [ -2586, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6244, 256, 2458 ], flag: 0, tc: [ 4056, -2076 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 5579, 922, 2458 ], flag: 0, tc: [ -2584, 4564 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6244, 922, 2458 ], flag: 0, tc: [ 4056, 4564 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3586, 1434, 1277 ], flag: 0, tc: [ -3096, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3631, 1434, 1872 ], flag: 0, tc: [ -6162, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4089, 1434, 956 ], flag: 0, tc: [ -6162, -6164 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3357, 1434, 1735 ], flag: 0, tc: [ -3096, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2578, 1434, 1346 ], flag: 0, tc: [ 5590, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1434, 1048 ], flag: 0, tc: [ 2012, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3036, 1434, 430 ], flag: 0, tc: [ 5588, -6164 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1536, 1048 ], flag: 0, tc: [ -2074, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1434, 1048 ], flag: 0, tc: [ -2074, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2899, 1434, 1506 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700E7A0 = [
	{ pos: [ -3631, 1536, 1872 ], flag: 0, tc: [ -6162, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3357, 1536, 1735 ], flag: 0, tc: [ -3096, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3586, 1536, 1277 ], flag: 0, tc: [ -3096, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -4089, 1536, 956 ], flag: 0, tc: [ -6162, -6164 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3036, 1536, 430 ], flag: 0, tc: [ 5588, -6164 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1536, 1048 ], flag: 0, tc: [ 2012, -1054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2578, 1536, 1346 ], flag: 0, tc: [ 5590, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2899, 1536, 1506 ], flag: 0, tc: [ 2012, 4054 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 4403 ], flag: 0, tc: [ 0, 7120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2406, 1331, 4147 ], flag: 0, tc: [ 2522, 3544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 1126, 4403 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1536, 1048 ], flag: 0, tc: [ -2074, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2899, 1434, 1506 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -2899, 1536, 1506 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700E880 = [
	{ pos: [ -3586, 1536, 1277 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1434, 1048 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3128, 1536, 1048 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3586, 1434, 1277 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3357, 1536, 1735 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3357, 1434, 1735 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3586, 1434, 1277 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ -3586, 1536, 1277 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 1126, 4403 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2406, 1331, 4147 ], flag: 0, tc: [ 2522, 3544 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 1126, 3891 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 0, 3891 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 1126, 3891 ], flag: 0, tc: [ 0, -10252 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 3891 ], flag: 0, tc: [ 7122, -10252 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 3891 ], flag: 0, tc: [ 5078, 7120 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 4403 ], flag: 0, tc: [ 0, 7120 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700E980 = [
	{ pos: [ 2765, 0, 4403 ], flag: 0, tc: [ 7122, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 4403 ], flag: 0, tc: [ 7122, -10252 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 1126, 4403 ], flag: 0, tc: [ 0, -10252 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 0, 4403 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 1126, 3891 ], flag: 0, tc: [ 5078, -10252 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 0, 3891 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 0, 3891 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 4403 ], flag: 0, tc: [ 0, -10252 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 0, 4403 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2048, 0, 3891 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 3891 ], flag: 0, tc: [ 7122, -10252 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 0, 3891 ], flag: 0, tc: [ 7122, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 2765, 1126, 3891 ], flag: 0, tc: [ 5078, -10252 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700EA50 = [
	{ pos: [ 6543, 819, 6646 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 1024, 6646 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7588, 1024, 6646 ], flag: 0, tc: [ -7388, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 819, 3594 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 1024, 2550 ], flag: 0, tc: [ 10392, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 819, 2550 ], flag: 0, tc: [ 10392, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 1024, 3594 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7588, 819, 3594 ], flag: 0, tc: [ -7388, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 1024, 3594 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 819, 3594 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7588, 1024, 3594 ], flag: 0, tc: [ -7388, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 819, 7690 ], flag: 0, tc: [ 10392, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 1024, 6646 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 819, 6646 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 1024, 7690 ], flag: 0, tc: [ 10392, 0 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700EB40 = [
	{ pos: [ 410, 819, 4086 ], flag: 0, tc: [ 10290, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1024, 4086 ], flag: 0, tc: [ 10290, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 1024, 4086 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 6543, 819, 6646 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7588, 1024, 6646 ], flag: 0, tc: [ -7388, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 7588, 819, 6646 ], flag: 0, tc: [ -7388, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 819, 6646 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 1024, 7680 ], flag: 0, tc: [ -9330, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 819, 7680 ], flag: 0, tc: [ -9330, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 1024, 6646 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 399, 819, 6646 ], flag: 0, tc: [ -7388, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 1024, 6646 ], flag: 0, tc: [ 3034, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 819, 6646 ], flag: 0, tc: [ 3034, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 399, 1024, 6646 ], flag: 0, tc: [ -7388, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 819, 4086 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
]

const hmc_seg7_vertex_0700EC30 = [
	{ pos: [ 1444, 819, 4086 ], flag: 0, tc: [ 990, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 1024, 4618 ], flag: 0, tc: [ -4220, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 819, 4618 ], flag: 0, tc: [ -4220, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 1444, 1024, 4086 ], flag: 0, tc: [ 990, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 922, 1024, 4618 ], flag: 0, tc: [ 5078, 0 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 819, 4618 ], flag: 0, tc: [ 0, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 922, 819, 4618 ], flag: 0, tc: [ 5078, 990 ], color: [ 255, 255, 255, 255 ] },
	{ pos: [ 410, 1024, 4618 ], flag: 0, tc: [ 0, 0 ], color: [ 255, 255, 255, 255 ] },
]

export const hmc_seg7_dl_0700ECB0 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09001000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700E5B0, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  5,  6, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7,  9, 10, 0x0, 11,  1,  0, 0x0),
	...Gbi.gsSP2Triangles(11, 12,  1, 0x0, 13, 14, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700E6B0, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  2,  1,  3, 0x0),
	...Gbi.gsSP2Triangles( 2,  3,  4, 0x0,  5,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 5,  8,  6, 0x0,  9, 10, 11, 0x0),
	...Gbi.gsSP2Triangles(12, 13, 14, 0x0, 10,  5,  7, 0x0),
	Gbi.gsSP1Triangle(10,  7, 11, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700E7A0, 14, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  0,  2, 0x0),
	...Gbi.gsSP2Triangles( 4,  3,  2, 0x0,  4,  2,  5, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  5,  7,  6, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700E880, 16, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  6,  7, 0x0),
	...Gbi.gsSP2Triangles( 8,  9, 10, 0x0, 11, 12, 13, 0x0),
	...Gbi.gsSP2Triangles( 9, 14, 10, 0x0, 14,  9, 15, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700E980, 13, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  2,  3, 0x0),
	...Gbi.gsSP2Triangles( 3,  4,  5, 0x0,  3,  2,  4, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  9, 10, 11, 0x0),
	Gbi.gsSP1Triangle( 6, 12,  7, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0700EE38 = [
	Gbi.gsDPSetTextureImage(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 1, cave_09003000),
	Gbi.gsDPLoadBlock(Gbi.G_TX_LOADTILE, 0, 0, 32 * 32 - 1),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700EA50, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 3,  6,  4, 0x0,  7,  8,  9, 0x0),
	...Gbi.gsSP2Triangles( 7, 10,  8, 0x0, 11, 12, 13, 0x0),
	Gbi.gsSP1Triangle(11, 14, 12, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700EB40, 15, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  3,  4,  5, 0x0),
	...Gbi.gsSP2Triangles( 6,  7,  8, 0x0,  6,  9,  7, 0x0),
	...Gbi.gsSP2Triangles(10, 11, 12, 0x0, 10, 13, 11, 0x0),
	Gbi.gsSP1Triangle( 0,  2, 14, 0x0),
	Gbi.gsSPVertex(hmc_seg7_vertex_0700EC30, 8, 0),
	...Gbi.gsSP2Triangles( 0,  1,  2, 0x0,  0,  3,  1, 0x0),
	...Gbi.gsSP2Triangles( 4,  5,  6, 0x0,  4,  7,  5, 0x0),
	Gbi.gsSPEndDisplayList(),
]

export const hmc_seg7_dl_0700EF00 = [
	Gbi.gsDPSetCycleType(Gbi.G_CYC_2CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_FOG_SHADE_A_AA_ZB_TEX_EDGE2),
	Gbi.gsDPSetFogColor(0, 0, 0, 255),
	Gbi.gsSPFogPosition(960, 1000),
	Gbi.gsSPSetGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_DECALRGBA),
	Gbi.gsSPClearGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 0, 0, Gbi.G_TX_LOADTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, Gbi.G_TX_NOMASK, Gbi.G_TX_NOLOD),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_ON),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0700ECB0),
	Gbi.gsDPSetTile(Gbi.G_IM_FMT_RGBA, Gbi.G_IM_SIZ_16b, 8, 0, Gbi.G_TX_RENDERTILE, 0, Gbi.G_TX_CLAMP, 5, Gbi.G_TX_NOLOD, Gbi.G_TX_WRAP | Gbi.G_TX_NOMIRROR, 5, Gbi.G_TX_NOLOD),
	Gbi.gsDPSetTileSize(0, 0, 0, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC, (32 - 1) << Gbi.G_TEXTURE_IMAGE_FRAC),
	Gbi.gsSPDisplayList(hmc_seg7_dl_0700EE38),
	Gbi.gsSPTexture(0xFFFF, 0xFFFF, 0, Gbi.G_TX_RENDERTILE, Gbi.G_OFF),
	Gbi.gsDPSetCycleType(Gbi.G_CYC_1CYCLE),
	Gbi.gsDPSetRenderMode(Gbi.G_RM_AA_ZB_TEX_EDGE_NOOP2),
	Gbi.gsSPClearGeometryMode(Gbi.G_FOG),
	Gbi.gsDPSetCombineMode(Gbi.G_CC_SHADE),
	Gbi.gsSPSetGeometryMode(Gbi.G_LIGHTING | Gbi.G_CULL_BACK),
	Gbi.gsSPEndDisplayList(),
]

