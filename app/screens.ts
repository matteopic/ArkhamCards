import { Navigation } from 'react-native-navigation';

import SearchMultiSelectView from '../components/SearchMultiSelectView';
import DeckDetailView from '../components/DeckDetailView';
import DeckEditView from '../components/DeckEditView';
import EditSpecialDeckCards from '../components/EditSpecialDeckCards';
import CardSearchView from '../components/CardSearchView';
import MythosButton from '../components/CardSearchComponent/MythosButton';
import TuneButton from '../components/CardSearchComponent/TuneButton';
import SortButton from '../components/CardSearchComponent/SortButton';
import CardDetailView from '../components/CardDetailView';
import CardDetailSwipeView from '../components/CardDetailSwipeView';
import CardFaqView from '../components/CardFaqView';
import CardTabooView from '../components/CardTabooView';
import CardImageView from '../components/CardImageView';
import InvestigatorCardsView from '../components/InvestigatorCardsView';
import AddScenarioResultView from '../components/campaign/AddScenarioResultView';
import UpgradeDecksView from '../components/campaign/UpgradeDecksView';
import EditScenarioResultView from '../components/campaign/EditScenarioResultView';
import CampaignDetailView from '../components/campaign/CampaignDetailView';
import CampaignEditWeaknessDialog from '../components/campaign/CampaignEditWeaknessDialog';
import CampaignDrawWeaknessDialog from '../components/campaign/CampaignDrawWeaknessDialog';
import CampaignDifficultyDialog from '../components/campaign/CampaignDifficultyDialog';
import EditChaosBagDialog from '../components/campaign/EditChaosBagDialog';
import MyCampaignsView from '../components/campaign/MyCampaignsView';
import NewCampaignView from '../components/campaign/NewCampaignView';
import SelectCampaignDialog from '../components/campaign/SelectCampaignDialog';
import MyDecksSelectorDialog from '../components/campaign/MyDecksSelectorDialog';
import CardUpgradeDialog from '../components/DeckDetailView/CardUpgradeDialog';
import CampaignScenarioView from '../components/campaign/CampaignScenarioView';
import CampaignChaosBagView from '../components/campaign/CampaignChaosBagView';
import MyDecksView from '../components/MyDecksView';
import NewDeckView from '../components/NewDeckView';
import DrawSimulatorView from '../components/DrawSimulatorView';
import DeckChartsView from '../components/DeckChartsView';
import DeckHistoryView from '../components/DeckHistoryView';
import DeckUpgradeDialog from '../components/DeckUpgradeDialog';
import OddsCalculatorView from '../components/OddsCalculatorView';
import CardFilterView from '../components/filter/CardFilterView';
import CardEnemyFilterView from '../components/filter/CardEnemyFilterView';
import CardLocationFilterView from '../components/filter/CardLocationFilterView';
import PackFilterView from '../components/filter/PackFilterView';
import DiagnosticsView from '../components/settings/DiagnosticsView';
import CollectionEditView from '../components/CollectionEditView';
import SettingsView from '../components/settings/SettingsView';
import PackCardsView from '../components/PackCardsView';
import SpoilersView from '../components/SpoilersView';
import CardSortDialog from '../components/CardSortDialog';
import InvestigatorSortDialog from '../components/InvestigatorSortDialog';
import ScenarioDialog from '../components/ScenarioDialog';
import ExileCardDialog from '../components/ExileCardDialog';
import AboutView from '../components/AboutView';
import WeaknessDrawDialog from '../components/weakness/WeaknessDrawDialog';
import SealTokenDialog from '../components/campaign/SealTokenDialog';

// register all screens of the app (including internal ones)
export function registerScreens(Provider: any, store: any) {
  Navigation.registerComponentWithRedux('About', () => AboutView, Provider, store);
  Navigation.registerComponentWithRedux('Browse.Cards', () => CardSearchView, Provider, store);
  Navigation.registerComponentWithRedux('Browse.InvestigatorCards', () => InvestigatorCardsView, Provider, store);
  Navigation.registerComponentWithRedux('Deck', () => DeckDetailView, Provider, store);
  Navigation.registerComponentWithRedux('Deck.Charts', () => DeckChartsView, Provider, store);
  Navigation.registerComponentWithRedux('Deck.History', () => DeckHistoryView, Provider, store);
  Navigation.registerComponentWithRedux('Deck.DrawSimulator', () => DrawSimulatorView, Provider, store);
  Navigation.registerComponentWithRedux('Deck.Edit', () => DeckEditView, Provider, store);
  Navigation.registerComponentWithRedux('Deck.EditSpecial', () => EditSpecialDeckCards, Provider, store);
  Navigation.registerComponentWithRedux('Deck.Upgrade', () => DeckUpgradeDialog, Provider, store);
  Navigation.registerComponentWithRedux('Deck.New', () => NewDeckView, Provider, store);
  Navigation.registerComponentWithRedux('Card', () => CardDetailView, Provider, store);
  Navigation.registerComponentWithRedux('Card.Swipe', () => CardDetailSwipeView, Provider, store);
  Navigation.registerComponentWithRedux('Card.Faq', () => CardFaqView, Provider, store);
  Navigation.registerComponentWithRedux('Card.Taboo', () => CardTabooView, Provider, store);
  Navigation.registerComponentWithRedux('Card.Image', () => CardImageView, Provider, store);
  Navigation.registerComponentWithRedux('My.Campaigns', () => MyCampaignsView, Provider, store);
  Navigation.registerComponentWithRedux('My.Decks', () => MyDecksView, Provider, store);
  Navigation.registerComponentWithRedux('Campaign', () => CampaignDetailView, Provider, store);
  Navigation.registerComponentWithRedux('Campaign.New', () => NewCampaignView, Provider, store);
  Navigation.registerComponentWithRedux('Campaign.AddResult', () => AddScenarioResultView, Provider, store);
  Navigation.registerComponentWithRedux('Campaign.UpgradeDecks', () => UpgradeDecksView, Provider, store);
  Navigation.registerComponentWithRedux('Campaign.EditResult', () => EditScenarioResultView, Provider, store);
  Navigation.registerComponentWithRedux('Campaign.Scenarios', () => CampaignScenarioView, Provider, store);
  Navigation.registerComponentWithRedux('Campaign.ChaosBag', () => CampaignChaosBagView, Provider, store);
  Navigation.registerComponentWithRedux('OddsCalculator', () => OddsCalculatorView, Provider, store);
  Navigation.registerComponentWithRedux('Settings', () => SettingsView, Provider, store);
  Navigation.registerComponentWithRedux('Settings.Diagnostics', () => DiagnosticsView, Provider, store);
  Navigation.registerComponentWithRedux('SearchFilters', () => CardFilterView, Provider, store);
  Navigation.registerComponentWithRedux('SearchFilters.Enemy', () => CardEnemyFilterView, Provider, store);
  Navigation.registerComponentWithRedux('SearchFilters.Location', () => CardLocationFilterView, Provider, store);
  Navigation.registerComponentWithRedux('SearchFilters.Packs', () => PackFilterView, Provider, store);
  Navigation.registerComponentWithRedux('SearchFilters.Chooser', () => SearchMultiSelectView, Provider, store);
  Navigation.registerComponentWithRedux('My.Collection', () => CollectionEditView, Provider, store);
  Navigation.registerComponentWithRedux('Pack', () => PackCardsView, Provider, store);
  Navigation.registerComponentWithRedux('My.Spoilers', () => SpoilersView, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.CardUpgrade', () => CardUpgradeDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.DeckSelector', () => MyDecksSelectorDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.EditChaosBag', () => EditChaosBagDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.ExileCards', () => ExileCardDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.Sort', () => CardSortDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.InvestigatorSort', () => InvestigatorSortDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.Scenario', () => ScenarioDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.Campaign', () => SelectCampaignDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.CampaignDifficulty', () => CampaignDifficultyDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.CampaignDrawWeakness', () => CampaignDrawWeaknessDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.CampaignEditWeakness', () => CampaignEditWeaknessDialog, Provider, store);
  Navigation.registerComponentWithRedux('Dialog.SealToken', () => SealTokenDialog, Provider, store);
  Navigation.registerComponentWithRedux('Weakness.Draw', () => WeaknessDrawDialog, Provider, store);
  Navigation.registerComponentWithRedux('SortButton', () => SortButton, Provider, store);
  Navigation.registerComponentWithRedux('TuneButton', () => TuneButton, Provider, store);
  Navigation.registerComponentWithRedux('MythosButton', () => MythosButton, Provider, store);
}
