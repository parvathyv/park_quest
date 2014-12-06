require 'sinatra'
require 'pg'
require 'pry'

get '/' do
	array = []
   
  array << params['latlng']
	
  erb :index
end


get '/markers' do

	erb :index
end	


post '/markers' do
   array = []
   array<<params[:lat]
  #binding.pry

end	