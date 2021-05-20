import { TableRow } from './general';

export const SPELL_DBC_TABLE = 'spell_dbc';
export const SPELL_DBC_CUSTOM_STARTING_ID = 200000;
export const SPELL_DBC_ID = 'ID';
export const SPELL_DBC_NAME = 'Name_Lang_enUS';
export const SPELL_DBC_NAMESUBTEXT = 'NameSubtext_Lang_enUS';
export const SPELL_DBC_DESCRIPTION = 'Description_Lang_enUS';
export const SPELL_DBC_SEARCH_FIELDS = [
  SPELL_DBC_ID,
  SPELL_DBC_NAME,
  SPELL_DBC_NAMESUBTEXT,
  SPELL_DBC_DESCRIPTION,
];

export class SPELL_DBC_SCHOOL_OPTIONS extends TableRow {
  SchoolMask: number = 0;
}

export class SpellDbc extends TableRow {
  ID: number = 0;
  Category: number = 0;
  DispelType: number = 0;
  Mechanic: number = 0;
  Attributes: number = 0;
  AttributesEx: number = 0;
  AttributesEx2: number = 0;
  AttributesEx3: number = 0;
  AttributesEx4: number = 0;
  AttributesEx5: number = 0;
  AttributesEx6: number = 0;
  AttributesEx7: number = 0;
  ShapeshiftMask: number = 0; // TODO
  unk_320_2: number = 0; // TODO
  ShapeshiftExclude: number = 0; // TODO
  unk_320_3: number = 0; // TODO
  Targets: number = 0;
  TargetCreatureType: number = 0; // TODO
  RequiresSpellFocus: number = 0;
  FacingCasterFlags: number = 0; // TODO
  CasterAuraState: number = 0;
  TargetAuraState: number = 0;
  ExcludeCasterAuraState: number = 0; // TODO
  ExcludeTargetAuraState: number = 0; // TODO
  CasterAuraSpell: number = 0; // TODO
  TargetAuraSpell: number = 0; // TODO
  ExcludeCasterAuraSpell: number = 0; // TODO
  ExcludeTargetAuraSpell: number = 0; // TODO
  CastingTimeIndex: number = 0;
  RecoveryTime: number = 0;
  CategoryRecoveryTime: number = 0; // TODO
  InterruptFlags: number = 0;
  AuraInterruptFlags: number = 0;
  ChannelInterruptFlags: number = 0;
  ProcTypeMask: number = 0;
  ProcChance: number = 0;
  ProcCharges: number = 0;
  MaxLevel: number = 0;
  BaseLevel: number = 0;
  SpellLevel: number = 0;
  DurationIndex: number = 0;
  PowerType: number = 0;
  ManaCost: number = 0;
  ManaCostPerLevel: number = 0;
  ManaPerSecond: number = 0;
  ManaPerSecondPerLevel: number = 0;
  RangeIndex: number = 0;
  Speed: number = 0;
  ModalNextSpell: number = 0; // TODO
  CumulativeAura: number = 0; // TODO
  Totem_1: number = 0;
  Totem_2: number = 0;
  Reagent_1: number = 0;
  Reagent_2: number = 0;
  Reagent_3: number = 0;
  Reagent_4: number = 0;
  Reagent_5: number = 0;
  Reagent_6: number = 0;
  Reagent_7: number = 0;
  Reagent_8: number = 0;
  ReagentCount_1: number = 0;
  ReagentCount_2: number = 0;
  ReagentCount_3: number = 0;
  ReagentCount_4: number = 0;
  ReagentCount_5: number = 0;
  ReagentCount_6: number = 0;
  ReagentCount_7: number = 0;
  ReagentCount_8: number = 0;
  EquippedItemClass: number = 0;
  EquippedItemSubclass: number = 0;
  EquippedItemInvTypes: number = 0;
  Effect_1: number = 0;
  Effect_2: number = 0;
  Effect_3: number = 0;
  EffectDieSides_1: number = 0;
  EffectDieSides_2: number = 0;
  EffectDieSides_3: number = 0;
  EffectRealPointsPerLevel_1: number = 0;
  EffectRealPointsPerLevel_2: number = 0;
  EffectRealPointsPerLevel_3: number = 0;
  EffectBasePoints_1: number = 0;
  EffectBasePoints_2: number = 0;
  EffectBasePoints_3: number = 0;
  EffectMechanic_1: number = 0;
  EffectMechanic_2: number = 0;
  EffectMechanic_3: number = 0;
  ImplicitTargetA_1: number = 0;
  ImplicitTargetA_2: number = 0;
  ImplicitTargetA_3: number = 0;
  ImplicitTargetB_1: number = 0;
  ImplicitTargetB_2: number = 0;
  ImplicitTargetB_3: number = 0;
  EffectRadiusIndex_1: number = 0;
  EffectRadiusIndex_2: number = 0;
  EffectRadiusIndex_3: number = 0;
  EffectAura_1: number = 0;
  EffectAura_2: number = 0;
  EffectAura_3: number = 0;
  EffectAuraPeriod_1: number = 0;
  EffectAuraPeriod_2: number = 0;
  EffectAuraPeriod_3: number = 0;
  EffectMultipleValue_1: number = 0;
  EffectMultipleValue_2: number = 0;
  EffectMultipleValue_3: number = 0;
  EffectChainTargets_1: number = 0;
  EffectChainTargets_2: number = 0;
  EffectChainTargets_3: number = 0;
  EffectItemType_1: number = 0;
  EffectItemType_2: number = 0;
  EffectItemType_3: number = 0;
  EffectMiscValue_1: number = 0;
  EffectMiscValue_2: number = 0;
  EffectMiscValue_3: number = 0;
  EffectMiscValueB_1: number = 0;
  EffectMiscValueB_2: number = 0;
  EffectMiscValueB_3: number = 0;
  EffectTriggerSpell_1: number = 0;
  EffectTriggerSpell_2: number = 0;
  EffectTriggerSpell_3: number = 0;
  EffectPointsPerCombo_1: number = 0;
  EffectPointsPerCombo_2: number = 0;
  EffectPointsPerCombo_3: number = 0;
  EffectSpellClassMaskA_1: number = 0;
  EffectSpellClassMaskA_2: number = 0;
  EffectSpellClassMaskA_3: number = 0;
  EffectSpellClassMaskB_1: number = 0;
  EffectSpellClassMaskB_2: number = 0;
  EffectSpellClassMaskB_3: number = 0;
  EffectSpellClassMaskC_1: number = 0;
  EffectSpellClassMaskC_2: number = 0;
  EffectSpellClassMaskC_3: number = 0;
  SpellVisualID_1: number = 0;
  SpellVisualID_2: number = 0;
  SpellIconID: number = 0; // TODO
  ActiveIconID: number = 0; // TODO
  SpellPriority: number = 0; // TODO
  Name_Lang_enUS: string = '';
  Name_Lang_enGB: string = '';
  Name_Lang_koKR: string = '';
  Name_Lang_frFR: string = '';
  Name_Lang_deDE: string = '';
  Name_Lang_enCN: string = '';
  Name_Lang_zhCN: string = '';
  Name_Lang_enTW: string = '';
  Name_Lang_zhTW: string = '';
  Name_Lang_esES: string = '';
  Name_Lang_esMX: string = '';
  Name_Lang_ruRU: string = '';
  Name_Lang_ptPT: string = '';
  Name_Lang_ptBR: string = '';
  Name_Lang_itIT: string = '';
  Name_Lang_Unk: string = '';
  Name_Lang_Mask: number = 0; // TODO
  NameSubtext_Lang_enUS: string = '';
  NameSubtext_Lang_enGB: string = '';
  NameSubtext_Lang_koKR: string = '';
  NameSubtext_Lang_frFR: string = '';
  NameSubtext_Lang_deDE: string = '';
  NameSubtext_Lang_enCN: string = '';
  NameSubtext_Lang_zhCN: string = '';
  NameSubtext_Lang_enTW: string = '';
  NameSubtext_Lang_zhTW: string = '';
  NameSubtext_Lang_esES: string = '';
  NameSubtext_Lang_esMX: string = '';
  NameSubtext_Lang_ruRU: string = '';
  NameSubtext_Lang_ptPT: string = '';
  NameSubtext_Lang_ptBR: string = '';
  NameSubtext_Lang_itIT: string = '';
  NameSubtext_Lang_Unk: string = '';
  NameSubtext_Lang_Mask: number = 0; // TODO
  Description_Lang_enUS: string = '';
  Description_Lang_enGB: string = '';
  Description_Lang_koKR: string = '';
  Description_Lang_frFR: string = '';
  Description_Lang_deDE: string = '';
  Description_Lang_enCN: string = '';
  Description_Lang_zhCN: string = '';
  Description_Lang_enTW: string = '';
  Description_Lang_zhTW: string = '';
  Description_Lang_esES: string = '';
  Description_Lang_esMX: string = '';
  Description_Lang_ruRU: string = '';
  Description_Lang_ptPT: string = '';
  Description_Lang_ptBR: string = '';
  Description_Lang_itIT: string = '';
  Description_Lang_Unk: string = '';
  Description_Lang_Mask: number = 0; // TODO
  AuraDescription_Lang_enUS: string = '';
  AuraDescription_Lang_enGB: string = '';
  AuraDescription_Lang_koKR: string = '';
  AuraDescription_Lang_frFR: string = '';
  AuraDescription_Lang_deDE: string = '';
  AuraDescription_Lang_enCN: string = '';
  AuraDescription_Lang_zhCN: string = '';
  AuraDescription_Lang_enTW: string = '';
  AuraDescription_Lang_zhTW: string = '';
  AuraDescription_Lang_esES: string = '';
  AuraDescription_Lang_esMX: string = '';
  AuraDescription_Lang_ruRU: string = '';
  AuraDescription_Lang_ptPT: string = '';
  AuraDescription_Lang_ptBR: string = '';
  AuraDescription_Lang_itIT: string = '';
  AuraDescription_Lang_Unk: string = '';
  AuraDescription_Lang_Mask: number = 0; // TODO
  ManaCostPct: number = 0;
  StartRecoveryCategory: number = 0; // TODO
  StartRecoveryTime: number = 0; // TODO
  MaxTargetLevel: number = 0;
  SpellClassSet: number = 0; // TODO
  SpellClassMask_1: number = 0;
  SpellClassMask_2: number = 0;
  SpellClassMask_3: number = 0;
  MaxTargets: number = 0;
  DefenseType: number = 0; // TODO
  PreventionType: number = 0;
  StanceBarOrder: number = 0; // TODO
  EffectChainAmplitude_1: number = 0;
  EffectChainAmplitude_2: number = 0;
  EffectChainAmplitude_3: number = 0;
  MinFactionID: number = 0; // TODO
  MinReputation: number = 0; // TODO
  RequiredAuraVision: number = 0; // TODO
  RequiredTotemCategoryID_1: number = 0;
  RequiredTotemCategoryID_2: number = 0;
  RequiredAreasID: number = 0;
  SchoolMask: number = 0; // TODO
  RuneCostID: number = 0;
  SpellMissileID: number = 0;
  PowerDisplayID: number = 0; // TODO
  Field227: number = 0; // TODO
  Field228: number = 0; // TODO
  Field229: number = 0; // TODO
  SpellDescriptionVariableID: number = 0;
  SpellDifficultyID: number = 0;
}
