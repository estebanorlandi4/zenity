import { Schema, model } from 'mongoose';
import { ISite } from 'utils/interfaces';

const siteSchema = new Schema<ISite>({
  name: { type: String, required: true },
  url: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
});

const SiteModel = model('sites', siteSchema);

export default SiteModel;
