import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  ExtensionVersionRegex,
  UrlMatchPatternRegex,
  UrlRegex,
} from 'src/core/constants';
import AllowedTypes, {
  ExtensionTypes,
} from 'src/core/KeyValuePair/AllowedTypes';
import BlockedPermissions, {
  Permissions,
} from 'src/core/KeyValuePair/BlockedPermissions';
import InstallationMode, {
  Modes as InstallationModes,
} from 'src/core/KeyValuePair/InstallationMode';
import InstallSources from 'src/core/KeyValuePair/InstallSources';
import MinVersion from 'src/core/KeyValuePair/MinVersion';
import RuntimeAllowedHosts from 'src/core/KeyValuePair/RuntimeAllowedHosts';
import RuntimeBlockedHosts from 'src/core/KeyValuePair/RuntimeBlockedHosts';
import ToolbarPin, { PinningMode } from 'src/core/KeyValuePair/ToolbarPin';
import UpdateUrl from 'src/core/KeyValuePair/UpdateUrl';
import RegexValidator from 'src/core/KeyValuePair/Validators/RegexValidator';
import Rule from 'src/core/Rule/Rule';
import { RuleService } from '../rule.service';

@Component({
  selector: 'app-rule-editor',
  templateUrl: './rule-editor.component.html',
  styleUrls: ['./rule-editor.component.css'],
})
export class RuleEditorComponent implements OnInit {
  @Input() rule: Rule;
  @Output() onSave = new EventEmitter<null>();
  @Output() onDiscard = new EventEmitter<null>();
  matchPatterValidator = new RegexValidator(UrlMatchPatternRegex);
  minVersionValidator = new RegexValidator(ExtensionVersionRegex);
  urlValidator = new RegexValidator(UrlRegex);

  keys = {
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

  permissionsList = Permissions.getList();
  extensionTypesList = ExtensionTypes.getList();
  pinningModes = PinningMode.getList();

  get installationModes(): string[] {
    if (this.isExtensionRule()) {
      return InstallationModes.getListForExtensionScope();
    }
    return InstallationModes.getListForGlobalScope();
  }

  constructor(private ruleService: RuleService) {}

  ngOnInit(): void {}

  isGlobalRule(): boolean {
    return this.rule.getScope() === '*';
  }

  isUpdateUrlRule(): boolean {
    return this.rule.getScope().startsWith('update_url:');
  }

  isExtensionRule(): boolean {
    return !this.isGlobalRule() && !this.isUpdateUrlRule();
  }

  shouldShowComponent(componentKey: string): boolean {
    if (this.isGlobalRule()) {
      return (
        componentKey == this.keys.installationMode ||
        componentKey == this.keys.blockedPermissions ||
        componentKey == this.keys.installSources ||
        componentKey == this.keys.allowedTypes ||
        componentKey == this.keys.runtimeBlockedHosts ||
        componentKey == this.keys.runtimeAllowedHosts
      );
    }
    if (this.isUpdateUrlRule()) {
      return (
        componentKey == this.keys.installationMode ||
        componentKey == this.keys.blockedPermissions
      );
    }
    if (this.isExtensionRule()) {
      return (
        componentKey !== this.keys.allowedTypes &&
        componentKey !== this.keys.installSources
      );
    }
  }

  allowedTypesChanged(newTypes: string[]) {
    if (newTypes.length === 0) {
      this.rule.removeKey(this.keys.allowedTypes);
    } else {
      this.rule.replaceKeyValuePair(new AllowedTypes(newTypes));
    }
  }

  blockedPermissionsChanged(newPermissions: string[]) {
    if (newPermissions.length === 0) {
      this.rule.removeKey(this.keys.blockedPermissions);
    } else {
      this.rule.replaceKeyValuePair(new BlockedPermissions(newPermissions));
    }
  }

  installationModeChanged(newMode: string) {
    this.rule.replaceKeyValuePair(new InstallationMode(newMode));
  }

  updateUrlChanged(newUrl: string) {
    if (newUrl.length === 0) {
      this.rule.removeKey(this.keys.updateUrl);
    } else {
      this.rule.replaceKeyValuePair(new UpdateUrl(newUrl));
    }
  }

  minVersionChanged(newVersion: string) {
    if (newVersion.length === 0) {
      this.rule.removeKey(this.keys.minVersion);
    } else {
      this.rule.replaceKeyValuePair(new MinVersion(newVersion));
    }
  }

  installSourcesChanged(newSources: string[]) {
    if (newSources.length === 0) {
      this.rule.removeKey(this.keys.installSources);
    } else {
      this.rule.replaceKeyValuePair(new InstallSources(newSources));
    }
  }

  runtimeAllowedHostsChanged(newHosts: string[]) {
    if (newHosts.length === 0) {
      this.rule.removeKey(this.keys.runtimeAllowedHosts);
    } else {
      this.rule.replaceKeyValuePair(new RuntimeAllowedHosts(newHosts));
    }
  }

  runtimeBlockedHostsChanged(newHosts: string[]) {
    if (newHosts.length === 0) {
      this.rule.removeKey(this.keys.runtimeBlockedHosts);
    } else {
      this.rule.replaceKeyValuePair(new RuntimeBlockedHosts(newHosts));
    }
  }

  toolbarPinChanged(newMode: string) {
    this.rule.replaceKeyValuePair(new ToolbarPin(newMode));
  }

  onSaveClick(): void {
    this.ruleService.addRule(this.rule);
    this.onSave.emit();
    console.log(this.ruleService);
  }

  onDiscardClick(): void {
    this.onDiscard.emit();
  }
}
