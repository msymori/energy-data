class DatasController < ApplicationController
    
    def index
        @houses = House.all
        @sumLondon = location_sum_energy("London")
        @sumOxford = location_sum_energy("Oxford")
        @sumCambridge = location_sum_energy("Cambridge")
        #gon.data = [@sumLondon, @sumOxford, @sumCambridge]
        gon.dataLondon = [@sumLondon]
        gon.dataOxford = [@sumOxford]
        gon.dataCambridge = [@sumCambridge]
    end 
    
    def show
        @house = House.find(params[:id])
        @datas = Dataset.where(house_id: params[:id])
    end
    
    
    private
    
        def location_sum_energy(location)
            @sumEnergy = 0
            @sumHouse = House.where(city: location)
            @sumHouse.each do |user|
                user.datasets.each do |data|
                    @sumEnergy += data.energy_production
                end
            end
            @sumEnergy
        end
end
