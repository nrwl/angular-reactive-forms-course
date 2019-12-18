export interface ConfigSettings {
  settingA: boolean;
  settingB: number;
  settingC: string;
  settingD: boolean;
  settingE: number;
  settingF: string;
  settingG: boolean;
  settingH: number;
  settingI: string;
  settingJ: boolean;
  settingK: number;
  settingL: string;
  settingM: boolean;
  settingN: number;
  settingO: string;
}

export const defaultConfigSettings: ConfigSettings = {
  settingA: true,
  settingB: 1,
  settingC: '',
  settingD: true,
  settingE: 1,
  settingF: '',
  settingG: true,
  settingH: 1,
  settingI: '',
  settingJ: true,
  settingK: 1,
  settingL: '',
  settingM: true,
  settingN: 1,
  settingO: ''
};

export interface ConfigSettingInfo {
  name: keyof ConfigSettings;
  type: 'boolean' | 'number' | 'string';
  category: 'General' | 'Advanced' | 'Admin';
}

export const configSettingInfo = [
  { name: 'settingA', type: 'boolean', category: 'General' },
  { name: 'settingB', type: 'number', category: 'General' },
  { name: 'settingC', type: 'string', category: 'General' },
  { name: 'settingD', type: 'boolean', category: 'General' },
  { name: 'settingE', type: 'number', category: 'General' },
  { name: 'settingF', type: 'string', category: 'Advanced' },
  { name: 'settingG', type: 'boolean', category: 'Advanced' },
  { name: 'settingH', type: 'number', category: 'Advanced' },
  { name: 'settingI', type: 'string', category: 'Advanced' },
  { name: 'settingJ', type: 'boolean', category: 'Advanced' },
  { name: 'settingK', type: 'number', category: 'Admin' },
  { name: 'settingL', type: 'string', category: 'Admin' },
  { name: 'settingM', type: 'boolean', category: 'Admin' },
  { name: 'settingN', type: 'number', category: 'Admin' },
  { name: 'settingO', type: 'string', category: 'Admin' }
];

export interface GeneralSettings {
  settingA: boolean;
  settingB: number;
  settingC: string;
  settingD: boolean;
  settingE: number;
}

export interface AdvancedSettings {
  settingF: string;
  settingG: boolean;
  settingH: number;
  settingI: string;
  settingJ: boolean;
}

export interface AdminSettings {
  settingK: number;
  settingL: string;
  settingM: boolean;
  settingN: number;
  settingO: string;
}

export interface ConfigSettingsState {
  configSettings: ConfigSettings;
  savePending: boolean;
}
