import { Component, Input, OnInit } from '@angular/core';
import AllowedTypes, {
  ExtensionTypes,
} from 'src/core/KeyValuePair/AllowedTypes';
import BlockedPermissions, {
  Permissions,
} from 'src/core/KeyValuePair/BlockedPermissions';
import InstallationMode, {Modes as InstallationModes} from 'src/core/KeyValuePair/InstallationMode';
import InstallSources from 'src/core/KeyValuePair/InstallSources';
import RuntimeAllowedHosts from 'src/core/KeyValuePair/RuntimeAllowedHosts';
import RuntimeBlockedHosts from 'src/core/KeyValuePair/RuntimeBlockedHosts';
import ToolbarPin, { PinningMode } from 'src/core/KeyValuePair/ToolbarPin';
import Rule from 'src/core/Rule/Rule';

@Component({
  selector: 'app-rule-editor',
  templateUrl: './rule-editor.component.html',
  styleUrls: ['./rule-editor.component.css'],
})
export class RuleEditorComponent implements OnInit {
  @Input() rule: Rule;

  keys = {
    installationMode: InstallationMode.key,
    blockedPermissions: BlockedPermissions.key,
    installSources: InstallSources.key,
    allowedTypes: AllowedTypes.key,
    runtimeBlockedHosts: RuntimeBlockedHosts.key,
    runtimeAllowedHosts: RuntimeAllowedHosts.key,
    toolbarPin: ToolbarPin.key,
  };

  permissionsList = Permissions.getList();
  extensionTypesList = ExtensionTypes.getList();
  pinningModes = PinningMode.getList();

  get installationModes(): string[] {
    if (this.isExtensionRule()) {
      return InstallationModes.getListForExtensionScope();
    }
    return InstallationModes.getListForGlobalScope()
  }

  constructor() {}

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
}
