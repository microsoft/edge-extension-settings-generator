import { ValidatedKeyValuePair } from './KeyValuePair';
import ExactMatchValidator from './Validators/ExactMatchValidator';

export class Permissions {
  public static permissions = {
    activeTab: 'activeTab',
    alarms: 'alarms',
    background: 'background',
    bookmarks: 'bookmarks',
    browsingData: 'browsingData',
    certificateProvider: 'certificateProvider',
    clipboardRead: 'clipboardRead',
    clipboardWrite: 'clipboardWrite',
    contentSettings: 'contentSettings',
    contextMenus: 'contextMenus',
    cookies: 'cookies',
    debugger: 'debugger',
    declarativeContent: 'declarativeContent',
    declarativeNetRequest: 'declarativeNetRequest',
    declarativeNetRequestFeedback: 'declarativeNetRequestFeedback',
    declarativeWebRequest: 'declarativeWebRequest',
    desktopCapture: 'desktopCapture',
    documentScan: 'documentScan',
    downloads: 'downloads',
    enterpriseDeviceAttributes: 'enterprise.deviceAttributes',
    enterpriseHardwarePlatform: 'enterprise.hardwarePlatform',
    enterpriseNetworkingAttributes: 'enterprise.networkingAttributes',
    enterprisePlatformKeys: 'enterprise.platformKeys',
    experimental: 'experimental',
    fileBrowserHandler: 'fileBrowserHandler',
    fileSystemProvider: 'fileSystemProvider',
    fontSettings: 'fontSettings',
    gcm: 'gcm',
    geolocation: 'geolocation',
    history: 'history',
    identity: 'identity',
    idle: 'idle',
    loginState: 'loginState',
    management: 'management',
    nativeMessaging: 'nativeMessaging',
    notifications: 'notifications',
    pageCapture: 'pageCapture',
    platformKeys: 'platformKeys',
    power: 'power',
    printerProvider: 'printerProvider',
    printing: 'printing',
    printingMetrics: 'printingMetrics',
    privacy: 'privacy',
    processes: 'processes',
    proxy: 'proxy',
    scripting: 'scripting',
    search: 'search',
    sessions: 'sessions',
    signedInDevices: 'signedInDevices',
    storage: 'storage',
    systemCpu: 'system.cpu',
    systemDisplay: 'system.display',
    systemMemory: 'system.memory',
    systemStorage: 'system.storage',
    tabCapture: 'tabCapture',
    tabGroups: 'tabGroups',
    tabs: 'tabs',
    topSites: 'topSites',
    tts: 'tts',
    ttsEngine: 'ttsEngine',
    unlimitedStorage: 'unlimitedStorage',
    vpnProvider: 'vpnProvider',
    wallpaper: 'wallpaper',
    webNavigation: 'webNavigation',
    webRequest: 'webRequest',
    webRequestBlocking: 'webRequestBlocking',
  };
  static getList(): string[] {
    return Object.values(Permissions.permissions);
  }
}

export default class BlockedPermissions extends ValidatedKeyValuePair {
  private validator = new ExactMatchValidator(Permissions.getList());

  getKey() {
    return 'blocked_permissions';
  }

  setValue(permissionsList: string[]) {
    super.setValue(permissionsList);
  }

  protected getValidator(): ExactMatchValidator {
    return this.validator;
  }
}
