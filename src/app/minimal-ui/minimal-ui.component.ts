import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  blockAllExtensionsCheckbox = new FormControl();
  generatedJson: string;

  // Private Data
  private allowedTypes: string[] = [];
  private globalBlockedPermissions: string[] = [];
  private globalBlockedHosts: string[] = [];
  private globalAllowedHosts: string[] = [];
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
    this.allowedTypes = newTypes;
  }

  blockedPermissionsChanged(newPermissions: string[]) {
    this.globalBlockedPermissions = newPermissions;
  }

  runtimeAllowedHostsChanged(newHosts: string[]) {
    this.globalAllowedHosts = newHosts;
  }

  runtimeBlockedHostsChanged(newHosts: string[]) {
    this.globalBlockedHosts = newHosts;
  }

  blockedExtensionsChanged(newBlockList: string[]) {
    this.blockList = newBlockList;
  }

  forceInstallListChanged(newForceInstallList: string[]) {
    this.forceInstallList = newForceInstallList;
  }

  generateJSON() {
    this.ruleService.reset();
    this.addGlobalRule();
    this.setBlockListedExtensions();
    this.setForceInstalledExtensions();
    this.generatedJson = this.ruleService.jsonify();
  }

  private addGlobalRule() {
    let globalRule = new GlobalRule();
    this.blockAllExtensionsIfChecked(globalRule);
    this.setAllowedTypes(globalRule);
    this.setBlockedPermissions(globalRule);
    this.setAllowedHosts(globalRule);
    this.setBlockedHosts(globalRule);
    this.ruleService.addRule(globalRule);
  }

  private blockAllExtensionsIfChecked(globalRule: GlobalRule) {
    if (this.blockAllExtensionsCheckbox.value) {
      globalRule.addKeyValuePair(new InstallationMode(InstallationModes.mode.blocked));
    }
  }

  private setAllowedTypes(globalRule: GlobalRule) {
    if (this.allowedTypes.length > 0) {
      globalRule.replaceKeyValuePair(new AllowedTypes(this.allowedTypes));
    }
  }
  
  private setBlockedPermissions(globalRule: GlobalRule) {
    if (this.globalBlockedPermissions.length > 0) {
      globalRule.replaceKeyValuePair(new BlockedPermissions(this.globalBlockedPermissions));
    }
  }

  private setAllowedHosts(globalRule: GlobalRule) {
    if (this.globalAllowedHosts.length > 0) {
      globalRule.replaceKeyValuePair(new RuntimeAllowedHosts(this.globalAllowedHosts));
    }
  }
  
  private setBlockedHosts(globalRule: GlobalRule) {
    if (this.globalBlockedHosts.length > 0) {
      globalRule.replaceKeyValuePair(new RuntimeBlockedHosts(this.globalBlockedHosts));;
    }
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
