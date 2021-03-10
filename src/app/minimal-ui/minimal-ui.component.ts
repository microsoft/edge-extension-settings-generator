import { Component, OnInit } from '@angular/core';
import { EdgeStoreUpdateUrl, UrlMatchPatternRegex } from 'src/core/constants';
import { ExtensionVersionRegex } from 'src/core/constants';
import { ExtensionIdRegex } from 'src/core/constants';
import { ForceInstallEntryRegex } from 'src/core/constants';
import AllowedTypes from 'src/core/KeyValuePair/AllowedTypes';
import { ExtensionTypes } from 'src/core/KeyValuePair/AllowedTypes';
import BlockedPermissions from 'src/core/KeyValuePair/BlockedPermissions';
import { Permissions } from 'src/core/KeyValuePair/BlockedPermissions';
import InstallationMode from 'src/core/KeyValuePair/InstallationMode';
import { Modes as InstallationModes } from 'src/core/KeyValuePair/InstallationMode';
import InstallSources from 'src/core/KeyValuePair/InstallSources';
import MinVersion from 'src/core/KeyValuePair/MinVersion';
import RuntimeAllowedHosts from 'src/core/KeyValuePair/RuntimeAllowedHosts';
import RuntimeBlockedHosts from 'src/core/KeyValuePair/RuntimeBlockedHosts';
import ToolbarPin from 'src/core/KeyValuePair/ToolbarPin';
import UpdateUrl from 'src/core/KeyValuePair/UpdateUrl';
import RegexValidator from 'src/core/KeyValuePair/Validators/RegexValidator';
import { ExtensionIdRule } from 'src/core/Rule/ExtensionIdRule';
import { GlobalRule } from 'src/core/Rule/GlobalRule';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-minimal-ui',
  templateUrl: './minimal-ui.component.html',
  styleUrls: ['./minimal-ui.component.css'],
})
export class MinimalUiComponent implements OnInit {
  // View Data
  matchPatterValidator = new RegexValidator(UrlMatchPatternRegex);
  minVersionValidator = new RegexValidator(ExtensionVersionRegex);
  extensionIdValidator = new RegexValidator(ExtensionIdRegex);
  forceInstallEntryValidator = new RegexValidator(ForceInstallEntryRegex);
  permissionsList = Permissions.getList();
  extensionTypesList = ExtensionTypes.getList();
  generatedJson: string;

  // Private Data
  private globalRule: GlobalRule = new GlobalRule();
  private blockList: string[] = [];
  private forceInstallList: string[] = [];
  private keys = {
    installationMode: InstallationMode.key,
    blockedPermissions: BlockedPermissions.key,
    installSources: InstallSources.key,
    allowedTypes: AllowedTypes.key,
    runtimeBlockedHosts: RuntimeBlockedHosts.key,
    runtimeAllowedHosts: RuntimeAllowedHosts.key,
    toolbarPin: ToolbarPin.key,
    updateUrl: UpdateUrl.key,
    minVersion: MinVersion.key,
  };

  constructor(private ruleService: RuleService) {}

  ngOnInit(): void {}

  allowedTypesChanged(newTypes: string[]) {
    if (newTypes.length == 0) {
      return this.globalRule.removeKey(this.keys.allowedTypes);
    }
    this.globalRule.replaceKeyValuePair(new AllowedTypes(newTypes));
  }

  blockedPermissionsChanged(newPermissions: string[]) {
    if (newPermissions.length == 0) {
      return this.globalRule.removeKey(this.keys.blockedPermissions);
    }
    this.globalRule.replaceKeyValuePair(new BlockedPermissions(newPermissions));
  }

  runtimeAllowedHostsChanged(newHosts: string[]) {
    if (newHosts.length == 0) {
      return this.globalRule.removeKey(this.keys.runtimeAllowedHosts);
    }
    this.globalRule.replaceKeyValuePair(new RuntimeAllowedHosts(newHosts));
  }

  runtimeBlockedHostsChanged(newHosts: string[]) {
    if (newHosts.length == 0) {
      return this.globalRule.removeKey(this.keys.runtimeBlockedHosts);
    }
    this.globalRule.replaceKeyValuePair(new RuntimeBlockedHosts(newHosts));
  }

  blockedExtensionsChanged(newBlockList: string[]) {
    this.blockList = newBlockList;
  }

  forceInstallListChanged(newForceInstallList: string[]) {
    this.forceInstallList = newForceInstallList;
  }

  generateJSON() {
    this.ruleService.reset();
    this.ruleService.replaceRule(this.globalRule);
    this.setBlockListedExtensions();
    this.setForceInstalledExtensions();
    this.generatedJson = this.ruleService.jsonify();
  }

  private setBlockListedExtensions() {
    this.blockList.forEach(extensionId => {
      let rule = new ExtensionIdRule(extensionId);
      rule.addKeyValuePair(new InstallationMode(InstallationModes.mode.blocked));
      this.ruleService.addRule(rule);
    });
  }

  private setForceInstalledExtensions() {
    this.forceInstallList.forEach(item => {
      let [extensionId, updateUrl] = item.split(";");
      let rule = new ExtensionIdRule(extensionId);
      rule.addKeyValuePair(new InstallationMode(InstallationModes.mode.forceInstalled));
      rule.addKeyValuePair(new UpdateUrl(updateUrl || EdgeStoreUpdateUrl));
      this.ruleService.addRule(rule);
    });
  }
}
